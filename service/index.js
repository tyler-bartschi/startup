const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const app = express();
const DB = rqeuire('./database.js');

const authCookieName = 'token';

let users = [];
let reviews = [];
let user_reviews = [];

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);


/* 
"api/auth/create" - POST - creates a user with an email and a password 
"api/auth/login" - POST - logs in a user, displays error if the password is wrong
"api/auth/logout" - DELETE - logs out a user
"api/auth/changeUser" - PUT - changes username
"api/auth/changePass" - PUT - changes password
"api/reviews" - GET - gets the reviews
"api/reviews" - POST - posts a review
*/

apiRouter.post('/auth/create', async (req, res) => {
    if (await findUser('username', req.body.username)) {
        res.status(409).send({msg: "Existing user"});
    } else {
        const user = await createUser(req.body.username, req.body.password);

        setAuthCookie(res, user.token);
        res.status(200).send({username: user.username});
    }
});

apiRouter.post('/auth/login', async (req, res) => {
    const user = await findUser('username', req.body.username);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            user.token = uuid.v4();
            setAuthCookie(res, user.token);
            res.send({username: user.username});
            return;
        } else {
            res.status(401).send({msg: 'Incorrect password'});
            return;
        }
    } else {
        res.status(401).send({msg: 'User does not exist'});
    }
    // res.status(401).send({msg: 'Unauthorized'});
});

apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        next();
    } else {
        res.status(401).send({msg: 'Unauthorized'});
    }
};

apiRouter.put('/auth/changeUser', verifyAuth, async (req, res) => {
    const result = await updateUser(req.body.field, req.body.value, req);
    if (result) {
        res.send({username: req.body.value});
    } else {
        res.status(401).send({msg: 'Process failed'});
    }
});

apiRouter.put('/auth/changePass', verifyAuth, async (req, res) => {
    const result = await updateUser(req.body.field, req.body.value, req);
    if (result) {
        res.send({msg: "Success"});
    } else {
        res.status(401).send({msg: 'Process failed'});
    }
});

apiRouter.get('/reviews', verifyAuth, (_req, res) => {
    if (reviews == []) {
        res.send(JSON.stringify({reviews: "[]"}));
    } else {
        res.send(JSON.stringify({reviews: reviews}));
    }
    
});

apiRouter.get('/reviews/user', verifyAuth, (_req, res) => {
    if (user_reviews == []) {
        res.send(JSON.stringify({reviews: "[]"}));
    } else {
        res.send(JSON.stringify({reviews: user_reviews}));
    }
});

apiRouter.put('/reviews', verifyAuth, (req, res) => {
    updateReviews(req.body.review);
    res.send(reviews);
});

apiRouter.put('/reviews/user', verifyAuth, (req, res) => {
    updateUserReviews(req.body.review);
    res.send(user_reviews);
});

// default error handling
app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message});
});

// returns default page if path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public'});
});

async function createUser(username, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        username: username,
        password: passwordHash,
        token: uuid.v4(),
    };
    users.push(user);

    return user;
}

async function updateUser(field, value, req) {
    const user = await findUser('token', req.cookies[authCookieName]);

    if (field === "username") {
        user.username = value;
        return true;
    } else if (field === "password") {
        const passwordHash = await bcrypt.hash(value, 10);
        user.password = passwordHash;
        return true;
    }
    return null;
}

async function findUser(field, value) {
    if (!value) return null;

    return users.find((u) => u[field] === value);
}

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

function updateReviews(score){
    reviews = [score, ...reviews];
}

function updateUserReviews(score) {
    user_reviews = [score, ...user_reviews];
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
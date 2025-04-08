const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');
const { webConnect } = require('./webConnect.js');

const authCookieName = 'token';


const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

var apiRouter = express.Router();
app.use('/api', apiRouter);

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
            await DB.updateUser(user);
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
});

apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
        DB.updateUser(user);
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

// update the list of books
apiRouter.get('/books', verifyAuth, async (req, res) => {
    const result = await getBooks();
    if (!result) {
        res.send(JSON.stringify("[]"));
    } else {
        res.send(JSON.stringify(result));
    }
});

apiRouter.get('/books/state', verifyAuth, async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    res.send({value: user.state});
});


apiRouter.put('/books/update', verifyAuth, async(req, res) => {
    const result = await updateBooks(req.body);
    if (result) {
        res.send({msg: "Successfully added"});
    } else {
        res.send({msg: "Book already added"});
    }
});

// which book to load when going to reviews
apiRouter.put('/books/update/state', verifyAuth, async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    user.state = req.body.value;
    await DB.updateUser(user);
    res.send({msg: "updated"});
});

apiRouter.put('/books/update/reviews', verifyAuth, async (req, res) => {
    await updateBookReview(req.body.title, req.body.review);
    res.send({msg: "updated reviews"});
});

apiRouter.put('/auth/changeUser', verifyAuth, async (req, res) => {
    const prev = await DB.getUser(req.body.value);
    if (prev) {
        res.status(401).send({msg: "Existing Username"});
    } else {
        const result = await updateUser(req.body.field, req.body.value, req);
        if (result) {
            res.send({username: req.body.value});
        } else {
            res.status(401).send({msg: 'Process failed'});
        }
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

apiRouter.get('/user/reviews', verifyAuth, async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    res.send({value: JSON.stringify(user.reviews)});
});

apiRouter.put('/user/reviews/update', verifyAuth, async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (JSON.stringify(user.reviews) === "[]") {
        user.reviews = [req.body.review];
    } else {
        user.reviews = [req.body.review, ...user.reviews];
    }
    await DB.updateUser(user);
    res.send({msg: "updated"});
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
        reviews: [],
        state: 0,
    };
    await DB.addUser(user);

    return user;
}

async function updateUser(field, value, req) {
    const user = await findUser('token', req.cookies[authCookieName]);

    if (field === "username") {
        user.username = value;
        DB.updateUserByToken(user);
        return true;
    } else if (field === "password") {
        const passwordHash = await bcrypt.hash(value, 10);
        user.password = passwordHash;
        DB.updateUserByToken(user);
        return true;
    }
    return null;
}

async function findUser(field, value) {
    if (!value) return null;

    if (field === "token") {
        return DB.getUserByToken(value);
    }
    return DB.getUser(value);
}

async function updateBooks(book) {
    const result = await DB.findBook(book);
    if (result) {
        return false;
    }
    await DB.addBook(book);
    return true;
}

async function getBooks() {
    const result = await DB.getBooksList();
    if (result.length === 0) {
        return false;
    } else {
        return result;
    }
}

async function updateBookReview(title, value) {
    const book = await DB.findBookByTitle(title);
    if (JSON.stringify(book.reviews) === "[]") {
        book.reviews = [value];
    } else {
        book.reviews = [value, ...book.reviews];
    }
    await DB.updateBook(book);
}

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

const httpService = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

webConnect(httpService);
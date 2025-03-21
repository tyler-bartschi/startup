const {MongoClient} = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup-test');
const userCollection = db.collection('temp-users');
const bookCollection = db.collection('temp-books');

(async function testConnection() {
    try {
        await db.command({ping: 1});
        console.log(`DB connected to ${config.hostname}`)
    } catch (ex) {
        console.log(`Connection failed to ${url} because ${ex.message}`);
        process.exit(1);
    }
})();

function getUser(username) {
    return userCollection.findOne({username: username});
}

function getUserByToken(token) {
    return userCollection.findOne({token: token});
}

async function addUser(user) {
    await userCollection.insertOne(user);
}

async function updateUser(user) {
    await userCollection.updateOne({username: user.username}, {$set: user});
}

async function findBook(book) {
    return await bookCollection.findOne({title: book.title});
}

async function addBook(book) {
    await bookCollection.insertOne(book);
}

async function getBooksList() {
    return bookCollection.find({}).toArray();
}

module.exports = {
    getUser,
    getUserByToken,
    addUser,
    updateUser,
    findBook,
    addBook,
    getBooksList,
};
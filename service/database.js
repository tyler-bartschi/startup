const {MongoClient} = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup-test');
const userCollection = db.collection('temp-users');
const BookCollection = db.collection('temp-books');

(async function testConnection() {
    try {
        await db.command({ping: 1});
        console.log(`DB connected to ${config.hostname}`)
    } catch (ex) {
        console.log(`Connection failed to ${url} because ${ex.message}`);
        process.exit(1);
    }
})();


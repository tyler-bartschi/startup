const {MongoClient} = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup-test');
const tempCollection = db.collection('temp-collection');

async function main() {
    try {
        await db.command({ping: 1});
        console.log(`DB connected to ${config.hostname}`)
    } catch (ex) {
        console.log(`Connection failed to ${url} because ${ex.message}`);
        process.exit(1);
    }
}

main();
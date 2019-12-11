const db = require('./index').connection.db;
const calls = db.collection("calls");

async function createCall(obj) {
    const dbRes = await calls.insertOne(obj);
    console.log(`Inserted new call`);
}

module.exports = {
    createCall
};
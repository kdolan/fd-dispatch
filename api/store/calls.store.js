const db = require('./index').connection.db;
const callsCollection = db.collection("calls");
const Call = require('../obj/Call').Call;

function objArrayFromMongo(array){
    return array.map(c => new Call(c));
}

async function createCall(call) {
    if(!(call instanceof Call))
        throw new Error("Must be instanceof Call");
    const dbRes = await callsCollection.insertOne(call.getForDb());
    call.id = dbRes.insertedId.toString();
    console.log(`Inserted new call with ID ${call.id}`);
    return call;
}

async function getCalls(query={}) {
    const calls = await callsCollection.find(query).toArray();
    console.log(`Fetched ${calls.length} calls`);
    return objArrayFromMongo(calls);
}

module.exports = {
    createCall,
    getCalls
};
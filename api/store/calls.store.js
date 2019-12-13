const db = require('./index').connection.db;
const callsCollection = db.collection("calls");
const Call = require('../obj/Call').Call;
let ObjectId = require('mongodb').ObjectID;


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

async function updateCall(call) {
    if(!(call instanceof Call))
        throw new Error("Must be instanceof Call");
    const dbRes = await callsCollection.updateOne({_id: new ObjectId(call.id)}, call.getForDb());
    console.log(`Updated call with ID ${call.id}`);
    return call;
}

async function getCalls(query={}) {
    const calls = await callsCollection.find(query).toArray();
    console.log(`Fetched ${calls.length} calls`);
    return objArrayFromMongo(calls);
}

async function getCallById(id) {
    const calls = await callsCollection.find({_id: new ObjectId(id)}).toArray();
    if(calls.length === 0)
        throw new Error("Call not found");
    console.log(`Fetched call ${id}`);
    return objArrayFromMongo(calls)[0];
}

module.exports = {
    createCall,
    getCalls,
    getCallById,
    updateCall
};
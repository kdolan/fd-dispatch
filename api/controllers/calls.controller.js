let controller = {};
module.exports = controller;
const callsStore = require('../store/calls.store');
const {Call} = require("../obj/Call");

controller.getCallsRoute = function (req, res) {
    callsStore.getCalls()
        .then(calls => {
            res.json(calls);
        })
        .catch(err => {
            console.error(err.stack);
            res.status(500).json({ "error": "An unexpected error occurred." });
        })
};

controller.getCallRoute = function (req, res) {
    const callId = req.params.callId;
    if(!callId){
        res.status(400).json({message: "Invalid callId"});
        return;
    }
    callsStore.getCallById(callId)
        .then(call => {
            res.json(call);
        })
        .catch(err => {
            console.error(err.stack);
            res.status(500).json({ "error": "An unexpected error occurred." });
        })
};

controller.insertCallRoute = function (req, res) {
    const call = new Call(req.body);
    callsStore.createCall(call)
        .then(result => {
            res.status(201).json(call);
        })
        .catch(err => {
            console.error(err.stack);
            res.status(500).json({ "error": "An unexpected error occurred." });
        })
};

controller.updateCallRoute = function (req, res) {
    const call = new Call(req.body);

    //TODO Move to domain
    if(!call.id){
        res.status(400).json({message: "No call.id"});
        return;
    }
    if(call.id !== req.params.callId){
        res.status(400).json({message: "call.id mismatch"});
        return;
    }

    callsStore.updateCall(call)
        .then(result => {
            res.status(200).json(call);
        })
        .catch(err => {
            console.error(err.stack);
            res.status(500).json({ "error": "An unexpected error occurred." });
        })
};
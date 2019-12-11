let controller = {};
module.exports = controller;
const callsStore = require('../store/calls.store');

controller.insertCallRoute = function (req, res) {
    callsStore.createCall({test: 123})
        .then(result => {
            res.json({"status": "ok"});
        })
        .catch(err => {
            res.status(500).json({ "error": "An unexpected error occurred." });
        })
};
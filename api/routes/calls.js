/**
 * Created by kdolan on 8/17/2017.
 */
let express = require('express');
let router = express.Router();
let path = require('path');

let controller = require('../controllers/calls.controller');
router.get('/', controller.insertCallRoute);


module.exports = router;
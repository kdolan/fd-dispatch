const r = require('dotenv').config();
let main = require('../../index');

before(done => {
    main(app => {
        global.server = app;
        done();
    })
});
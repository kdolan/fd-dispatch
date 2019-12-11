require('./startapp.global-hook');
let request = require('supertest');

describe('Calls', function () {
    it('get calls', function (done) {
        request(global.server)
            .get('/v1/calls')
            .expect(200, done);
    });

    it('clear call', function (done) {
        request(server)
            .delete('/v1/calls')
            .send({})
            .expect(201, done);
    });
});

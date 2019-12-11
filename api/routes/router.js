exports.configureRoutes = function (app) {
    app.use('/v1/calls', require('./calls'));
    app.get('/hello', (req, res) => res.json({status: 'Hello World'}));
};
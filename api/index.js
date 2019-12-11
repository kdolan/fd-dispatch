const connectDb = require('./store').connect;

async function main() {
    const db = await connectDb();

    const express = require('express');
    const bodyParser = require('body-parser');
    const cors = require('cors');
    const app = express();
    const apiPort = 3000;
    let router = require('./routes/router');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cors());
    app.use(bodyParser.json());
    router.configureRoutes(app);

    app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
}

module.exports = main;
const {MONGO_USERNAME, MONGO_PASSWORD, MONGO_SERVER, MONGO_DB_NAME} = process.env;

let MongoClient = require('mongodb').MongoClient;

const CONNECTION_STRING = connectionString = 'mongodb+srv://' + MONGO_USERNAME + ':' + MONGO_PASSWORD + '@' + MONGO_SERVER + '/' + MONGO_DB_NAME + "?ssl=true";

let connection = {db: null};
async function connect() {
   return MongoClient.connect(CONNECTION_STRING)
       .then(client => {
           console.log(`Connected to Mongodb`);
           connection.db = client.db(MONGO_DB_NAME);
           return connection.db;
       })
       .catch(err => {
           if(err.message === "authentication fail")
           {
               console.error(`MongoDb authentication failed`);
               return Promise.reject(`MongoDb authentication failed`);
           }
           console.error(`MongoDb connection failed`);
           return Promise.reject(err);
       })
}

module.exports = {
    connect,
    connection
};
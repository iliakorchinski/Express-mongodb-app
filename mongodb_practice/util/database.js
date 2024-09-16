// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-application', 'root', 'Ilia615!', {
//   dialect: 'mysql',
//   host: 'localhost',
// });

// module.exports = sequelize;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnection = (callback) => {
  MongoClient.connect(
    'mongodb+srv://kortchinskii:EnqG2uepGKPEGKk8@cluster0.bbez7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
    .then((client) => {
      console.log('CONNECTED');
      _db = client.db();
      callback(client);
    })
    .catch((err) => console.log(err));
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found';
};

exports.mongoConnection = mongoConnection;
exports.getDb = getDb;

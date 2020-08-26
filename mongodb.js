const { MongoClient, ObjectId } = require('mongodb');
let db;
const os = require('os'),
    hostname = os.hostname(),
    member = [`${hostname}:27017`];
console.log(member);
MongoClient.connect(`mongodb://localhost:27017/test?replSet=rs0`)
    .then(mongo => {
        db = mongo;
        db.admin().replSetGetStatus().then(status => {
            console.log('status');
            db.close();
        });
        console.log('ready');
    }, console.error)
module.exports.Article = {
    all() {
        return db.collection('articles').find().sort({ title: 1 }).toArray();
    },
    find(_id) {
        if (typeof _id !== 'object') _id = new ObjectId(_id);
        return db.collection('articles').findOne({ _id })
    },
    create(data) {
        return db.collection('articles').insertOne(data, { w: 1 });
    },
    delete(_id) {
        if (typeof _id !== 'object') _id = new ObjectId(_id);
        return db.collection('articles').remove({ _id })
    }
}
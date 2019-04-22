const mongoose = require('mongoose');

before((done) => {
    mongoose.connect('mongodb://localhost/mongo_tests', { useNewUrlParser: true});
    mongoose.connection
        .once('open', () => done())
        .on('error', () => {
            console.warn(error);
        })
})

beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
        done();
    })
})
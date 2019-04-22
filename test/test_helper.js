const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo_tests', { useNewUrlParser: true});
mongoose.connection
    .once('open', () => console.log('Connected to database'))
    .on('error', () => {
        console.warn(error);
    })
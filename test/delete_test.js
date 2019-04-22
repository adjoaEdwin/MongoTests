const assert = require('assert');
const User = require('../src/user');

describe('Removing users from the database', () => {
    let tagoe;

    beforeEach((done) => {
        tagoe = new User({ name: 'Tagoe'})
        tagoe.save()
            .then(() => done());
    })

    function assertName(operation, done) {
        operation 
        .then(() => User.findOne({ name: 'Tagoe'}))
        .then((user) => {
            assert(user === null);
            done();
        })
    }

    it('model instance remove a user from the database', (done) => {
       assertName(tagoe.remove(), done)
    })

    it('class instance remove a user from the database' , (done) => {
        assertName(User.remove(), done);
    })

    it('class instance findOneAndRemove', (done) => {
        assertName(User.findOneAndRemove({ name: 'Tagoe'}), done);
    })

    it('findByIdAndRemove', (done) => {
        assertName(User.findByIdAndRemove(tagoe._id), done);
    })
})
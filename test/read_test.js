const assert = require('assert');
const User = require('../src/user');

describe('Retrieves users from the database', () => {
    let tagoe;

    beforeEach((done) => {
        tagoe = new User({ name: 'Tagoe'})
        tagoe.save()
            .then(() => done());
    })

    it('retrieves all users named tagoe from the database', (done) => {
        User.find({ name: 'Tagoe'})
            .then((users) => {
                assert(users[0]._id.toString() === tagoe._id.toString());
                done();
            })
    })

    it('retrieves a user by and id', (done) => {
        User.findOne(tagoe._id)
            .then((user) => {
                assert(tagoe.name === 'Tagoe');
                done();
            })
    })
})
const assert = require('assert');
const User = require('../src/user');

describe('Removing users from the database', () => {
    let tagoe;

    beforeEach((done) => {
        tagoe = new User({ name: 'Tagoe', likes: 0})
        tagoe.save()
            .then(() => done());
    })

    function assertName(operation , done) {
        operation
        .then(() => User.find({}))
        .then((users) => {
            assert(users[0].name === 'Alex');
            done();
        })
    }

    it('model instance set and save', (done) => {
        tagoe.set('name', 'Alex')
        assertName(tagoe.save(), done);
    })

    it('class instance update', (done) => {
        assertName(tagoe.update({ name: 'Alex'}), done);
    })

    it('class instance update', (done) => {
        assertName(User.update({ name: 'Tagoe'}, { name: 'Alex'}), done);
    })

    it('findByIdAndUpdate class instance update', (done) => {
        assertName(User.findByIdAndUpdate(tagoe._id, { name: 'Alex'}), done);
    })

    it('findOneAndUpdate class instance update', (done) => {
        assertName(User.findOneAndUpdate({name: 'Tagoe'}, { name: 'Alex'}), done);
    })

    it('finds a user an increment likes by 1', (done) => {
        User.update({ name: 'Tagoe'}, { $inc: { likes: 1} })
            .then(() => User.findOne({ name: 'Tagoe'}))
            .then((user) => {
                assert(user.likes === 1);
                done();
            })
    })
})
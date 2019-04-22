const assert = require('assert');
const User = require('../src/user');

describe('Subdocuments', () => {

    it('creates posts for each user', (done) => {
        const tagoe = new User({ name: 'Tagoe', posts: [{ title: 'Post Title'}]})
        tagoe.save()
            .then(() => User.findOne({ name: 'Tagoe'}))
            .then((user) => {
                assert(user.posts[0].title === 'Post Title');
                done();
            })
    })

    it('adds subdocuments or posts to an existing user or record', (done) => {
        const tagoe = new User({ name: 'Tagoe', posts: []})
        tagoe.save()
            .then(() => User.findOne({ name: 'Tagoe'}))
            .then((user) => {
                user.posts.push({ title: 'New Post'})
                return user.save()
            })
            .then(() => User.findOne({ name: 'Tagoe'}))
            .then((user) => {
                assert(user.posts[0].title === 'New Post');
                done();
            })
    })

    it('removes subdocuments from the database', (done) => {
        const tagoe = new User({ name: 'Tagoe', posts: [{ title: 'Post Title'}]})
        tagoe.save()
            .then(() => User.findOne({ name: 'Tagoe'}))
            .then((user) => {
                user.posts[0].remove()
                return user.save()
            })
            .then(() => User.findOne({name: 'Tagoe'}))
            .then((user) => {
                assert(user.posts.length === 0);
                done();
            })
    })
})
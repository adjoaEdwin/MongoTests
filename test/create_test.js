const assert = require('assert');
const User = require('../src/user');

describe('Creating new records into the database', () => {
    it('saves a new user into the database', (done) => {
        const tagoe = new User({ name: 'Tagoe'})
        tagoe.save()
            .then(() => {
                assert(!tagoe.isNew)
                done();
            })
    })
})
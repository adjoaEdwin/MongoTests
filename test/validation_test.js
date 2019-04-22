const assert = require('assert');
const User = require('../src/user');

describe('Validation of user names', () => {
    it('checks if name is present', () => {
        const user = new User({ name: undefined})
        const error = user.validateSync();
        const { message } = error.errors.name;
        assert(message === 'Name is required');
    })

    it('checks if name is more than 3 characters', () => {
        const user = new User({ name: 'Al'})
        const error = user.validateSync();
        const { message } = error.errors.name;
        assert(message === 'Name should be more than three characters');
    })
})
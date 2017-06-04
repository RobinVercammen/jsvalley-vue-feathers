const { authenticate } = require('feathers-authentication').hooks;

const processUser = require('../../hooks/process-user');

const filterUser = require('../../hooks/filter-user');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [processUser()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [filterUser()],
    get: [filterUser()],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

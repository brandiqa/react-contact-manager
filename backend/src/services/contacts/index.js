'use strict';

const service = require('feathers-mongoose');
const contacts = require('./contacts-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: contacts,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/contacts', service(options));

  // Get our initialize service to that we can bind hooks
  const contactsService = app.service('/contacts');

  // Set up our before hooks
  contactsService.before(hooks.before);

  // Set up our after hooks
  contactsService.after(hooks.after);
};

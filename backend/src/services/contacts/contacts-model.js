'use strict';

// contacts-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-type-email');

const contactsSchema = new Schema({
  name : {
    first: { type: String, required: true },
    last: { type: String, required: false }
  },
  email : { type: mongoose.SchemaTypes.Email, required: true },
  phone : { type: String, required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const contactsModel = mongoose.model('contacts', contactsSchema);

module.exports = contactsModel;

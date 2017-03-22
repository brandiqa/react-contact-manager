'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('contacts service', function() {
  it('registered the contacts service', () => {
    assert.ok(app.service('contacts'));
  });
});

var assert = require('assert');
var format = require('../src/Formatter.js');

describe('testFormatOfLowerCaseString', function() {
  it('Should uppercase the first letter of the sentence', function() {
    var actual = 'this is a sentence which should be uppercased';
    var actual = format(actual);
    assert.equal('This is a sentence which should be uppercased', actual);
  });
});

describe('testUndefined', function() {
  it('Should not explode when we pass in an undefined string', function() {
    var actual;
    var actual = format(actual);
    assert.equal(undefined, actual);
  });
});

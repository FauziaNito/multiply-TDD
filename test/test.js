const { assert } = require('chai');
const multiply = require('../multiply');

describe('multiply function', () => {
  it('should multiply 1 and 1 to equal 1', () => {
    const result = multiply(1, 1);
    assert.equal(result, 1);
  });
});

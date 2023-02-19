const { assert } = require('chai');
const multiply = require('../multiply');

describe('multiply function', () => {
  it('should multiply 1 and 1 to equal 1', () => {
    const result = multiply(1, 1);
    assert.equal(result, 1);
  });

  it('should multiply 2 and 2 to equal 4', () => {
    const result = multiply(2, 2);
    assert.equal(result, 4);
  });

  it('should multiply 3 and 3 to equal 9', () => {
    const result = multiply(3, 3);
    assert.equal(result, 9);
  });

  it('should multiply 4 and 4 to equal 16', () => {
    const result = multiply(4, 4);
    assert.equal(result, 16);
  });
});

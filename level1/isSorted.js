/**
 * Given an array of numbers, it checks whether it is sorted (in the ascending order). Returns true or false.
 */
function isSorted(inputData) {

    if(inputData == null) {
        
        return false;
    }
    else if(inputData.length == 0) {
        return true;
    }
   
    for (let i = 0; i < inputData.length-1; i++) {
        if(inputData[i] > inputData[i+1]) {
            return false;
        }           
    }

    return true;
}
    
   


describe('isSorted', function() {
  const assert = require('chai').assert;

  it('should consider an empty array sorted', function() {
    assert.isTrue(isSorted([]));
  });

  it('should consider a trivial array sorted', function() {
    assert.isTrue(isSorted([ 1 ]));
    assert.isTrue(isSorted([ 53 ]));
  });

  it('should accept equal values next to each other', function() {
    assert.isTrue(isSorted([ 3, 3 ]));
    assert.isTrue(isSorted([ 72, 72, 72, 72 ]));
  });

  it('should detect good order', function() {
    assert.isTrue(isSorted([ 2, 4, 12 ]));
    assert.isTrue(isSorted([ -1, 0, 1, 90, 122 ]))
  });

  it('should not accept descending order', function() {
    assert.isFalse(isSorted([ 3, 2, 1 ]));
    assert.isFalse(isSorted([ 92, 12, 0, -50 ]));
  });

  it('should not choose chaos over order', function() {
    assert.isFalse(isSorted([ 1, 5, 3 ]));
    assert.isFalse(isSorted([ 7, 8, 9, 2 ]));
    assert.isFalse(isSorted([ 0, 0, 3, 0 ]));
  });
});
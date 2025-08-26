// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/**
 * Given an input Array, loop forward over the Array and print its values
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
for (var i = 0; i < array.length; i++){
  console.log(array[i])
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Array, loop backwards over the Array and print its values
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
for (var i = array.length - 1; i >= 0; i--){
console.log(array[i])
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //

  var holdObjKey = []

  for (let key in object){
    if (object.hasOwnProperty(key)){
      holdObjKey.push(key)
    }
  }
return holdObjKey
  
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, loop over the Object and print its keys
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for (let key in object){
    if (object.hasOwnProperty(key)){
      console.log(key)
    }
  }

  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //

var storageArray = [];

  for (let key in object){
    if (object.hasOwnProperty(key)){
      storageArray.push(object[key])
    }
  }
  return storageArray
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, loop over the Object and print its values
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //

  for (let key in object){
    if (object.hasOwnProperty(key)){
      console.log(object[key])
    }
  }

  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
// create a count var
// create an objectlength var

var count = 0

var objectLength = 0

for (var key in object){
if (object.hasOwnProperty(key)){
  count++;
  }
}
  objectLength = count 
return objectLength
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, how might we loop over the Object IN REVERSE and
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var objKeys = Object.keys(object);

  for (var i = objKeys.length - 1; i >= 0 ; i--){
    console.log(object[objKeys[i]])
  }
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.printArrayValues = printArrayValues;
  module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
  module.exports.printObjectValues = printObjectValues;
  module.exports.getObjectValues = getObjectValues;
  module.exports.getObjectKeys = getObjectKeys;
  module.exports.printObjectKeys = printObjectKeys;
  module.exports.getObjectLength = getObjectLength;
  module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}

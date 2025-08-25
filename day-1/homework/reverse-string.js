// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a
 *  String as its only input and returns a new String
 *  representing the input String reversed.  For example:
 *
 *      reverseString('hello');  // => 'olleh'
 *
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */
/*
I:function should only take the string as a input
O: Function should return the string revered in a new string
C: Need a storage var to hold the reverse string, need a loop for reversing the string
E: 
*/
function reverseString(input) {
  // YOUR CODE BELOW HERE //
//create a var for storing the reverse string\
var reversedInput = "";
// create a loop to go through the string and reverse it (yuck)
for (let i = input.length - 1; i >= 0; i--){
  //store that reversed string into the placeholder var
   reversedInput += input[i];
}
return reversedInput
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}

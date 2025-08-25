// #!/usr/bin/env node

'use strict';

const { replace } = require("lodash");

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/*
I: Function takes in an input string.
O: Function returns the length of the input string.
C:
E:
*/

function length(string) {
  // YOUR CODE BELOW HERE //

// return input string's length
  return string.length;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */


/* 
I: Function takes a string value
O: function should force string value into lower case
C:
E:
*/

function toLowerCase(string) {
  // YOUR CODE BELOW HERE //
// return string into lower case (.toLowerCase())
  return string.toLowerCase()
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

/*
I: Function takes a string value
O: function should force the string into uppercase
C:
E:
*/

function toUpperCase(string) {
  // YOUR CODE BELOW HERE //
//return an uppercase string via (.toUpperCase)
return string.toUpperCase()
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */

/*
I: Function should take input string value
O: Function shouwld return a new string that is loer case and with dash instead of space
C:
E:
*/
function toDashCase(string) {
  // YOUR CODE BELOW HERE //
  //Turn string into lower case (can a var work?)
  var lowerCase = string.toLowerCase()
  // replace the space with a dash
return lowerCase.split(" ").join("-")
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/*
I: function takes an string and a single character
O: Function should return true if the string behinds with the character, if not return false
C: Function is case insensitive
E:
*/
function beginsWith(string, char) {
  // YOUR CODE BELOW HERE //
//should check if the string matches the first character in the string (index 0)
if (string[0] === char || string[0].toLowerCase() === char) {
    return true
} else {
  return false
}
// if index 0 matches the string, return true
// if index 0 don't match the string, return false

  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

/* So the opposite of whats above
I: function takes an string and a single character
O: Function should return true if the string ends with the msatching character, if not return false
C: Function is case insensitive
E:
*/
function endsWith(string, char) {
  // YOUR CODE BELOW HERE //
  var lowerCase = string.toLowerCase()
  var lowerCaseChar = char.toLowerCase()
  // check if the string last letter matches the character in the string (string.length - 1)
  if (string[string.length - 1] === char || lowerCase[lowerCase.length - 1] === lowerCaseChar){
      return true
  } else {
    return false
  }
  // if string last letter equals char then true
  // if string last letter dosn't equal char then it false 
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */

/*
I: Functioln should accept 2 strings
O: Function should concate the two strings into one string
C: 
E:
*/
function concat(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
//return string1 + string 2 via concante
return stringOne.concat(stringTwo)
  // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */

/*
I: function should take strings
O: Fucntion should join the strings together and store into into an array called "args"
C: Function should store the joined strings into an array called "args"
E:
*/
function join(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  var args = Array.from(arguments);
// should join the strings together
var joinedStrings = stringOne.concat(stringTwo)
// store the joined strings in into the arg array
args = joinedStrings
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */

/*
I: function should read the length of the strings and compare them
O: Functuon should return the longer string.
C: 
E:
*/
function longest(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
//check if stringOne is longer than stringTwo
if(stringOne.length > stringTwo.length){
return stringOne
} else {
  return stringTwo
}
//if the string is longer than return that one
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/* how do the function know the alphabet????
I: The functuon should take strings as the param
O: Function should return 1 if stringOne is a higher alphabetical order than stringTwo. If stringTwo is higher than stringOne, return -1. If equal return 0
C: 
E:
*/
function sortAscending(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
//check is StringOne is in a higher letter order than StringTwo (appparemently there's a thingy for that compareTo() or localeCompare whatever that means)
// for ease of mind, I'm going to make a var placeholder
var letterHolder = stringOne.localeCompare(stringTwo)

if (letterHolder < 0){
return 1
} else if (letterHolder > 0){
  return -1
} else {
  return 0
}
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/* Oppesoite of the one above
I: 
O: return 1 if stringOne is lower order than stringTwo, return -1 of opposite, return 0 is equal
C: 
E:
*/
function sortDescending(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  // create a place holder var to actually check the order 
  var oppLetterHolder = stringOne.localeCompare(stringTwo)
  //check if oppletterholfrt is less than 0, return 1 if so
  if (oppLetterHolder > 0){
    return 1
    } // if oppLetterholder is greater than 0, return -1
    else if (oppLetterHolder < 0){
      return -1
    } // if equal, return 0
    else {
      return 0
    }
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.length = length;
  module.exports.toLowerCase = toLowerCase;
  module.exports.toUpperCase = toUpperCase;
  module.exports.toDashCase = toDashCase;
  module.exports.beginsWith = beginsWith;
  module.exports.endsWith = endsWith;
  module.exports.concat = concat;
  module.exports.join = join;
  module.exports.longest = longest;
  module.exports.sortAscending = sortAscending;
  module.exports.sortDescending = sortDescending;
}

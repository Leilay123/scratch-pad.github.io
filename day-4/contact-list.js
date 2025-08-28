// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List // Contacts
 *
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast)
 *     that returns a contact object.
 *
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *
 *  b. Create a factory Function called makeContactList that returns an Object
 *     that manages contacts. The contact-list object should have the following methods:
 *
 *      1. length(): returns the number of contacts within the list. (the list is `contacts`)
 *      2. addContact(contact): takes a contact object to be added to the
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and
 *         returns the contact object if found in the contacts-list, or,
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should
 *         return a String formated with all the full-names of the separated
 *         with a line-break, like so:
 *
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

/* Leila notes :D
fill in the factory function that return an object with all of the keys/value pairs
*/
function makeContact(id, nameFirst, nameLast) {
  // Solve this function first
  var contactsObject = {};
  //forgot to give it an object to return oops, add that above
      return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
      }
}

function makeContactList() {
  /*
   * You need something here to hold contacts. See length api for a hint:
   */
  var contacts = [];

  return {
    // we implemented the length api for you //
    length: function(){
      return contacts.length;
    }, //start here
    addContact: function addContact (contant){
      contacts.push(contacts)
    }, // findContact(fullName) should take a full name string and returns the oject if it's in the list and return undifinded if t he name isn't in the list

/* 
I: function should called findContact and take a parameter (fullName) which is a string
O: function should return the contacts object if the full name is found if not, return undefined
C:
E:
*/

    findContact: function findContact (fullName){
        for (var i = 0; i < contacts.length; i++){
          // var fishFood = contacts[i]; // named it something so I don't confused them
            if (contacts[i].nameFirst + ' ' + contacts[i].nameLast === fullName){
              return contacts[i];
            }
        } 
        return undefined;

    }, // removeContact
    removeContact: function (contact){
       var index = contacts.indexOf(contact)
        if (index !== -1){
          contacts.splice(index, 1);
        }
    }, // printAllContactNames

    printAllContactNames: function printAllContactNames(){
      var names = [];
      for (var i = 0; i < contacts.length; i++){
        names.push(contacts[i].nameFirst + ' ' + contacts[i].nameLast)
      }
      return names.join('\n');
    }

  }
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== 'undefined' &&
  typeof process.versions.node !== 'undefined'
) {
  // here, export any references you need for tests //
  module.exports.makeContact = makeContact;
  module.exports.makeContactList = makeContactList;
}

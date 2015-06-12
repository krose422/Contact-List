// ; (function () {

  // 'use strict';

// DOM variables
var firstName = $('#firstName');
var lastName = $('#lastName');
var email = $('#emailAdd');
var phone = $('#phoneNum');
var website = $('#website');
var notes = $('#notes');

// Add to collection
var allContacts = new ContactCollection();

// Get existing contacts from database, upload to DOM
allContacts.fetch().done( function () {
  allContacts.each( function (model) {
    addContactToList(model.attributes);
  });
});

// Add instance function

var addContact = function (e) {
  e.preventDefault();

  var contact = new Contact ({
      firstName: firstName.val(),
      lastName: lastName.val(),
      email: email.val(),
      phone: phone.val(),
      website: website.val(),
      notes: notes.val()
  });

  allContacts.add(contact).save().success( function (data) {
    addContactToList(data);
  });

  this.reset();
};

var addContactToList = function (d) {
  var nameListTemplate = template.nameList(d);

  $('#leftList').prepend(nameListTemplate);
};

// Form submit listener
$('#contactInput').on('submit', addContact);


// }());

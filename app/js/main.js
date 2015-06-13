// ; (function () {

  // 'use strict';

// DOM variables
var firstName = $('#firstName');
var lastName = $('#lastName');
var email = $('#emailAdd');
var phone = $('#phoneNum');
var website = $('#website');
var notes = $('#notes');
var addressOne = $('#addOne');
var addressTwo = $('#addTwo');
var lat,
    lng;

// Add to collection
var allContacts = new ContactCollection();

// Get existing contacts from database, upload to DOM
allContacts.fetch().done( function () {
  allContacts.each( function (model) {
    addContactToList(model.attributes);
    addContactToSC(model.attributes);
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
    notes: notes.val(),
    addressOne: addressOne.val(),
    addressTwo: addressTwo.val(),
    lat: lat,
    lng: lng
  });
  console.log(lat);
  console.log(lng);

  allContacts.add(contact).save().success( function (data) {
    addContactToList(data);
    addContactToSC(data);
  });

  this.reset();
  $('#firstName').focus();

};

// Add contact function
var addContactToList = function (d) {
  var nameListTemplate = template.nameList(d);
  $('#leftList').prepend(nameListTemplate);
};

var addContactToSC = function (d) {
  var selectedContactTemplate = template.contactInfo(d);
  $('#selectedContact').html(selectedContactTemplate);
};

// Delete contact function
var deleteContact = function () {
  var contactToDelete = $(this).parent(),
      idToDelete = contactToDelete.attr('id'),
      contactToDeleteList = $('.leftList').find('[data-id=' + idToDelete + ']');

  allContacts.get(idToDelete).destroy().success( function (data) {
    contactToDelete.remove();
    contactToDeleteList.remove();
    $('.selectedContact').html('<div class="deletedResponse"><p>Got rid of that one!</p><i class="fa fa-magic"></i></div>');
  });
};

// Populate selected contact function
var populateSC = function () {
  var idToPopulate = $(this).data('id');

  allContacts.each( function (contact) {
    if (idToPopulate === contact.id) {
      $('.selectedContact').html(template.contactInfo(contact.toJSON()));
    }
  });
};

// Sort function

var sortContacts = function () {
  $(this).addClass('sorted');
  $(this).siblings().removeClass('sorted');
};

// Form submit listener
$('#contactInput').on('submit', addContact);

// Delete event listener
$('.main').on('click','#delete', deleteContact);

// List item event listener
$('ul').on('click', 'li', populateSC);

// Sort button event listener
$('.nameList').on('click', '.circle', sortContacts);


// }());

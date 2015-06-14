// ; (function () {

//   'use strict';

// Define inputmask for phone number input
$(document).ready(function () {
  $('#phoneNum').inputmask('999-999-9999', { showMaskOnFocus: false, showMaskOnHover: false });
  firstNameSort();
  $('#firstNameSort').addClass('sorted');
});

// DOM variables
var firstName = $('#firstName');
var lastName = $('#lastName');
var email = $('#emailAdd');
var phone = $('#phoneNum');
var website = $('#website');
var notes = $('#notes');
var addressOne = $('#addOne');
var addressTwo = $('#addTwo');
var sortedContacts;

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

  var firstN = firstName.val();

  if (firstN !== '') {
    var contact = new Contact ({
      firstName: firstName.val(),
      lastName: lastName.val(),
      email: email.val(),
      phone: phone.val(),
      website: website.val(),
      notes: notes.val(),
      addressOne: addressOne.val(),
      addressTwo: addressTwo.val()
    });

    allContacts.add(contact).save().success( function (data) {
      addContactToList(data);
      addContactToSC(data);
      highlightName();
    });

    this.reset();
    $('#firstName').focus();
  }
  if (firstN === '') {
    $('.alert').addClass('show');
  }
};

// Add contact function
var addContactToList = function (d) {
  var nameListTemplate = template.nameList(d);
  $('#leftList').prepend(nameListTemplate);
};

// Add contact to 'selected contact' section of page
var addContactToSC = function (d) {
  var selectedContactTemplate = template.contactInfo(d);
  $('#selectedContact').html(selectedContactTemplate);
};

// Delete contact function
var deleteContact = function () {
  var contactToDelete = $(this).parents('.sc'),
      idToDelete = contactToDelete.attr('id'),
      contactToDeleteList = $('.leftList').find('[data-id=' + idToDelete + ']');
  allContacts.get(idToDelete).destroy().success( function (data) {
    contactToDelete.remove();
    contactToDeleteList.remove();
    $('.selectedContact').html('<div class="deletedResponse"><p>Got rid of that one!</p><i class="fa fa-magic"></i></div>');
  });
};

// Highlight name in left list shown in SC
var highlightName = function () {
  var idToHighlight = $('.sc').attr('id');
  var listContactToHighlight = $('.leftList').find('[data-id=' + idToHighlight + ']');
  listContactToHighlight.addClass('selected');
  listContactToHighlight.siblings().removeClass('selected');
};

// Populate selected contact function
var populateSC = function () {
  var idToPopulate = $(this).data('id');
  allContacts.each( function (contact) {
    if (idToPopulate === contact.id) {
      $('.selectedContact').html(template.contactInfo(contact.toJSON()));
    }
  });
  highlightName();
};

// Toggle sorted class on click
var addSortClass = function () {
  $(this).addClass('sorted');
  $(this).siblings().removeClass('sorted');
};

// Append sorted list to name list on left side
var appendSortedList = function () {
  $('#leftList').empty();
  sortedContacts.each( function (contact) {
    var nameListTemplate = template.nameList(contact.attributes);
    $('#leftList').append(nameListTemplate);
  });
};

// Sort names in left list by last name
var lastNameSort = function () {
  allContacts.fetch().done (function () {
    allContacts.comparator = function(item) {
      return item.get('lastName').toLowerCase();
    };
    sortedContacts = allContacts.sort();
    appendSortedList();
    highlightName();
  });
};

// Sort names in left list by first name
var firstNameSort = function () {
  allContacts.fetch().done( function () {
    allContacts.comparator = function(item) {
      return item.get('firstName').toLowerCase();
    };
    sortedContacts = allContacts.sort();
    appendSortedList();
    highlightName();
  });
};


// Form submit listener
$('#contactInput').on('submit', addContact);

// Delete event listener
$('.main').on('click','#delete', deleteContact);

// List item event listener
$('ul').on('click', 'li', populateSC);

// Sort button event listener
$('.nameList').on('click', '.circle', addSortClass);

// Sort by first name
$('#firstNameSort').on('click', firstNameSort);

// Sort by last name
$('#lastNameSort').on('click', lastNameSort);

// Enter http:// on focus of website input field
$('#website').on('focus', function () {
  $(this).val('http://');
  // websiteEntry();
});

// var websiteEntry = function () {
//   var el = $(this).get(0);
//   var elemLength = el.value.length;

//   el.selectionStart = elemLength;
//   el.selectionEnd = elemLength;
//   el.focus();
// };


// }());

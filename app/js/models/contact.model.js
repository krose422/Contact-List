var Contact = Backbone.Model.extend({

  initialize: function () {

  },

  idAttribute: '_id',

  defaults: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    addressOne: '',
    addressTwo: '',
    website: '',
    additionalNotes: ''
  }

});

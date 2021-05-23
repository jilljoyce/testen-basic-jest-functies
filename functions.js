const functions = {
    isNull: function() {
      return null;
    },
    checkValue: function(x) {
      return x;
    },
    createUser: function() {
      const user = { 
        firstName: 'Brad' 
      };
      user['lastName'] = 'Traversy';
      return user;
    }
  };
  
  //exporteer de functie vanuit dit bestand naar functions.test.js
  module.exports = functions;
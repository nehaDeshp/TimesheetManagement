'use strict';
module.exports = function(app) {
  var links = require('./logincontroller');

  app.route('/signin')
    .post(links.validateLogin);

  app.route('/signup')
    .post(links.userSignUp);
};
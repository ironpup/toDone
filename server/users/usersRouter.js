var usersController = require('./usersController.js')

module.exports = function (app) {
  app.route('/')
    .post(usersController.signUp);
}

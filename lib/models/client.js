var mongoose = require('mongoose');

var ClientModel = function() {
  var clientSchema = mongoose.Schema({
    clientId: {type: String, unique: true},
    clientSecret: {type: String, unique: true},
    createdAt: {type: Date, default: Date.now},
    name: {type: String},
    scope: {type: String},
    userId: {type: String},
    redirectUri: {type: String}
  });

  return mongoose.model('Client', clientSchema);
};

module.exports = new ClientModel();
var mongoose  = require('mongoose');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var contactSchema = new Schema({
    personName: String,
    personNumber: String
});

module.exports = mongoose.model('Contact', contactSchema);
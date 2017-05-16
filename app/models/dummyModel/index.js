var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var dummySchema = new Schema({
    dummyValue: { type: String, Required: false}
});
module.exports = mongoose.model('DummyModel', dummySchema);
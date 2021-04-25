var mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String
})

module.exports = mongoose.model('admin', adminSchema);
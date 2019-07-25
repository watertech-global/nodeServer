//watertech models
//Customer

const mongoose = require('mongoose');

const Customer = new mongoose.Schema({
    idItem: {type:Number, default:0},
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    company: {type:String, trim=true, default:''}
});

module.exports = mongoose.model('Customer', Customer);

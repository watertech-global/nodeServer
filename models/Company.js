//watertech models
//Customer

const mongoose = require('mongoose');

const Customer = new mongoose.Schema({
    idItem: {type:Number, default:0},
    firstName: {type:String, trim=true, default:''},
    lastName: {type:String, trim=true, default:''},
    email: {type:String, trim=true, default:''},
    phone: {type:String, trim=true, default:''},
    email: {type:String, trim=true, default:''},
    company: {type:String, trim=true, default:''}
});

module.exports = mongoose.model('Customer', Customer);

const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    name:String,
    age: Number
})
const User = mongoose.model('User', userschema);
module.exports = User;
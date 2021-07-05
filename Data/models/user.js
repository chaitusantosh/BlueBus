const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    mobile: { type: String },
    password: { type: String },
    dateofbirth: { type: String },
    sex: { type: String },
    plan: []
})
module.exports = mongoose.model('User', userSchema);
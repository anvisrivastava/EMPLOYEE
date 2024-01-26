const mongoose = require('mongoose');
let employeeScheme = new mongoose.Schema({
    name : String,
    designation : String,
    experience : Number
});
module.exports = mongoose.model('Employee', employeeScheme);




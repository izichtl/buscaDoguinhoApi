const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create user schema for new entry

let userSchema = new Schema({
    name: { 
        type: String, 
        requeired: true
    },
    email: { 
        type: String, 
        requeired: true
    },
    password: { 
        type: String, 
        requeired: true
    }
});

module.exports = mongoose.model('user', userSchema);
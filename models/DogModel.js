const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Doguinho schema for new entry
let DogSchema = new Schema({
    _id: {
        type: Number,
        requeired: true
    },
    name: {
        type: String,
        requeired: true
    },
    identidade: {
        type: String,
        requeired: true
    },
    
    idade: {
        type: String,
        requeired: true
    },
    cidade: {
        type: String,
        requeired: true
    },
    
    distrito: {
        type: String,
        requeired: true
    },
    imagelink: {
        type: String,
        requeired: true
    }


});

module.exports = mongoose.model('distrito', DogSchema);


const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Pet name is required"], minlength: [3, "Pet name must be atleast 3 characters"]},
    type: {type: String, required: [true, "Pet type is required"], minlength: [3, "Pet type must be atleast 3 characters"]},
    description: {type: String, required: [true, "Pet Description is required"], minlength: [3, "Pet Description must be atleast 3 characters"]},
    skillOne: {type: String},
    skillTwo: {type: String},
    skillThree: {type: String}
}, {timestamps: true});

// Change the names..
module.exports.Pet = mongoose.model('Pet', PetSchema);
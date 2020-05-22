// Don't forget to change the enterName on line 2!
const {Pet} = require('../models/Belt.model');

// DON'T FORGET TO CHANGE THE NAMES! ESPECIALLY THE ONES IN THE PARENTHESIS
module.exports.createPet = (req, res) => {
    const {name, type, description, skillOne, skillTwo, skillThree} = req.body;
    Pet.create({
        name,
        type,
        description,
        skillOne,
        skillTwo,
        skillThree
    })
    .then(pet => res.json(pet))
    .catch(err => res.status(400).json(err));
}

module.exports.getAllPets = (req, res) => {
    Pet.find({})
    .then(pet => res.json(pet))
    .catch(err => res.json(err));
}

module.exports.getOnePet = (req, res) => {
    Pet.findOne({_id: req.params.id})
    .then(pet => res.json(pet))
    .catch(err => res.json(err));
}

module.exports.updatePet = (req, res) => {
    // To have findOneAndUpdate show validations you have to add "runValidators:true" see the end of line 26
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
    .then(updatedPet => res.json(updatedPet))
    .catch(err => res.json(err));
}

module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err))
}
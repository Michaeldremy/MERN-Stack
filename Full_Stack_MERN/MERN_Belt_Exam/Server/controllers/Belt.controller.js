// Don't forget to change the enterName on line 2!
const {Project} = require('../models/Belt.model');

// DON'T FORGET TO CHANGE THE NAMES! ESPECIALLY THE ONES IN THE PARENTHESIS
module.exports.createProject = (req, res) => {
    const {name, date, status} = req.body;
    Project.create({
        name,
        date,
        status
    })
    .then(project => res.json(project))
    .catch(err => res.json(err));
}

module.exports.getAllProjects = (req, res) => {
    Project.find({})
    .then(projects => res.json(projects))
    .catch(err => res.json(err));
}

module.exports.updateProject = (req, res) => {
    Project.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedProject => res.json(updatedProject))
    .catch(err => res.status(400).json(err));
}

module.exports.getOneProject = (req, res) => {
    Project.findOne({_id: req.params.id})
    .then(project => res.json(project))
    .catch(err => res.json(err));
}

module.exports.deleteProject = (req, res) => {
    Project.deleteOne({_id: req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err => res.json(err))
}
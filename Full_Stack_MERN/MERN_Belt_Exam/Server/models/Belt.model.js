const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Project Name is required"], minlength: 3},
    date: {type: Date, required: [true, "Date is required"]},
    status: {type: String, required: [true]}
}, {timestamps: true});

module.exports.Project = mongoose.model('Project', ProjectSchema);
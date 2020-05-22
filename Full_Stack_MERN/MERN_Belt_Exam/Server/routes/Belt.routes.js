const BeltController = require('../controllers/Belt.controller');

module.exports = function(app) {
    app.post('/api/newproject/', BeltController.createProject);
    app.get('/api/project/', BeltController.getAllProjects);
    app.get('/api/project/:id', BeltController.getOneProject);
    app.put('/api/project/:id', BeltController.updateProject);
    app.delete('/api/project/:id', BeltController.deleteProject);
}
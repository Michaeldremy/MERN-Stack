const PersonController = require('../controllers/person.controller');
module.exports = function(app){
    app.get('/api/', PersonController.index);
    app.post('/api/person/', PersonController.createPerson);
    app.get('/api/person/', PersonController.getAllPeople);
    app.get('/api/person/:id', PersonController.getPerson);
    app.put('/api/person/:id', PersonController.updatePerson);
    app.delete('/api/person/:id', PersonController.deletePerson);
}

const BeltController = require('../controllers/Belt.controller');

module.exports = function(app) {
    app.post('/api/newpet/', BeltController.createPet);
    app.get('/api/pet/', BeltController.getAllPets);
    app.get('/api/pet/:id', BeltController.getOnePet);
    app.put('/api/pet/:id', BeltController.updatePet);
    app.delete('/api/pet/:id', BeltController.deletePet);
}

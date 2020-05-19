const AuthorController = require('../controllers/Author.controller');

module.exports = function(app){
    app.post('/api/newauthor/', AuthorController.createAuthor);
    app.get('/api/author/', AuthorController.getAllAuthors);
    app.get('/api/author/:id', AuthorController.getOneAuthor);
    app.put('/api/author/:id', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
}
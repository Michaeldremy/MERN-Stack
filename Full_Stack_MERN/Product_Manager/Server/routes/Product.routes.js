const ProductController = require('../controllers/Product.controller');
module.exports = function(app){
    app.get('/api/', ProductController.index);
    app.post('/api/newproduct/', ProductController.createProduct);
    app.get('/api/product/', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getOneProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}
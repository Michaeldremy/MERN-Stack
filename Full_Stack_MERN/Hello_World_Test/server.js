const express = require('express');
const cors = require('cors'); // This is a new line of code
const app = express();
app.use(cors()) // This is a new line of code
const port = 8000;
require('./Server/config/mongoose.config'); // This is a new line of code
app.use(express.json()); // This is a new line of code
app.use(express.urlencoded({ extended: true })); // This is a new line of code
require('./Server/routes/person.routes')(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );
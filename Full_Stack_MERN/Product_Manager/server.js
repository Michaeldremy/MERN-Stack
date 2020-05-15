const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
const port = 8000;
app.use(express.json()); // This is a new line of code
app.use(express.urlencoded({ extended: true })); // This is a new line of code
require("./Server/config/mongoose.config");
require('./Server/routes/Product.routes')(app);
app.listen(port, () => console.log(`Listening on port: ${port}`) );
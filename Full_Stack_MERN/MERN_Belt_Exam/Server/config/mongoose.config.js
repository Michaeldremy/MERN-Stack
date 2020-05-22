const mongoose = require("mongoose");
// line 3 you can call your DB whatever you want after localhost/enter-database-name
mongoose.connect("mongodb://localhost/BeltExamOneFixx2DB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
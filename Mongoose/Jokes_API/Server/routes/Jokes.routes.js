const JokeController = require("../controllers/Jokes.controller");

module.exports = app => {
    // GET Requests
    app.get("/api/jokes", JokeController.findAllJokes);
    app.get("/api/joke/:id", JokeController.findOneJoke);
    // app.get("/api/jokes/random", JokeController.);
    // POST Request
    app.post("/api/jokes/new", JokeController.createNewJoke);
    // PUT Request
    app.put("/api/jokes/update/:id", JokeController.updateOneJoke);
    // DELETE Request
    app.delete("/api/jokes/delete/:id", JokeController.deleteOneJoke);
}
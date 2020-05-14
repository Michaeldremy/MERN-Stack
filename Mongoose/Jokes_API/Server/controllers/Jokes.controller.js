const Joke = require("../models/Jokes.model");

module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then (allJokes => res.json({ jokes: allJokes }))
    .catch(err => res.json({ message: "The joke didn't load because it was bad!", error: err}));
};

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
    .then (singleJoke => res.json({ joke: singleJoke}))
    .catch(err => res.json({ message: "Could not find a single joke!", error: err}));
};

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
    .then (newCreatedJoke => res.json({ joke: newCreatedJoke }))
    .catch(err => res.json({ message: "Unable to create joke because it wasn't funny enough.", error: err}));
};

module.exports.updateOneJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id}, req.body, {new: true})
    .then(updatedSingleJoke => res.json({ joke: updatedSingleJoke }))
    .catch(err => res.json({ message: "There was an error updating the joke.", error: err}));
};

module.exports.deleteOneJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Unable to delete the joke, something went wrong.", error: err}));
};
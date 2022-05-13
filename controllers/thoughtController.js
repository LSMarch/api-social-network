const {Thoughts} = require('../models');

module.exports = {
    getThoughts(req,res) {
        Thoughts.find()
            .then((thought) => res.json('yoooooo'))
            .catch((err) => res.status(500).json('nooooooo'))
    },
    createThought(req,res) {
        Thoughts.create(req.body)
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => console(err))
    }
}
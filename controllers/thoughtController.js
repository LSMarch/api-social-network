const {Thoughts} = require('../models');

module.exports = {
    getThoughts(req,res) {
        Thoughts.find()
            .then((thought) => res.json('yoooooo'))
            .catch((err) => res.status(500).json('nooooooo'))
    }
}
const { Users } = require('../models');

module.exports = {
    getUsers(req, res) {
        Users.find()
            .then((users) => res.status(200).json('hey'))
            .catch((err) => res.status(500).json(err));
    }
}
//console.log(getUsers());
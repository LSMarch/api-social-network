const { Users } = require('../models');

module.exports = {
    getUsers(req, res) {
        Users.find()
            .then((users) => res.status(200).json('hey'))
            .catch((err) => res.status(500).json(err));
    },
    getOneUser(req,res) {
        Users.findOne({username:req.params.username})
            .then((user) => 
                !user
                    ? res.status(400).json({message: 'nope'})
                    : res.json('sure')
            )
            .catch((err)=> res.status(500).json('oops'))
    },
    createUser(req,res) {
        Users.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json('nooooo'))
    }
}
//console.log(getUsers());
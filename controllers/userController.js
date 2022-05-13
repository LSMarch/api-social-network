const { Users } = require('../models');

module.exports = {
    getUsers(req, res) {
        Users.find()
            .then((users) => res.status(200).json(users))
            .catch((err) => res.status(500).json(err));
    },
    getOneUser(req,res) {
        Users.findOne({username:req.params.username})
            .then((user) => 
                !user
                    ? res.status(400).json({message: 'Could not find user'})
                    : res.json(user)
            )
            .catch((err)=> res.status(500).json('Server down'))
    },
    createUser(req,res) {
        Users.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json('Server down'))
    },
    updateUser(req,res) {
        Users.findOneAndUpdate({username: req.params.username}, {name: req.body.username}, {new: true}, (err,result) => {
            if(result) {
                res.status(200).json('yarp')
            } else {
                console.log(err)
                res.status(400).json('you suck')
            }
        })
    }
}
//console.log(getUsers());
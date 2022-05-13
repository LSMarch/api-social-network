const {Thoughts} = require('../models');

module.exports = {
    getThoughts(req,res) {
        Thoughts.find()
            .then((thought) => res.status(200).json(thought))
            .catch((err) => res.status(500).json(err))
    },
    getOneThought(req,res) {
        Thoughts.findOne({_id:req.params._id})
            .then((thought) =>
                !thought
                    ? res.status(500).json({message: 'Could not think of thought'})
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err))
    },
    createThought(req,res) {
        Thoughts.create(req.body)
            .then((dbThoughtData) => res.status(200).json(dbThoughtData))
            .catch((err) => console(err))
    },
    updateThought(req,res) {
        Thoughts.findOneAndUpdate({_id:req.params._id}, {thoughtText: req.body.thoughtText}, {new: true}, (err,result) => {
            if(result) {
                res.status(200).json(result)
            } else {
                console.log(err)
                res.status(400).json(err)
            }
        })
    },
    deleteThought(req,res) {
        Thoughts.findOneAndDelete({_id:req.params._id}, (err,results) => {
            if(results) {
                res.status(200).json('Thought has been deleted');
            } else {
                res.status(500).json(err)
            }
        })
    }
}
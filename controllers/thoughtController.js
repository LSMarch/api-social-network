const {Thoughts, Users} = require('../models');
const  {ObjectId}=  require('mongoose').Types

module.exports = {
    // Get all thoughts
    getThoughts(req,res) {
        Thoughts.find()
            .then((thought) => res.status(200).json(thought))
            .catch((err) => res.status(500).json(err))
    },
    // Get one thought
    getOneThought(req,res) {
        Thoughts.findOne({_id:req.params._id})
            .then((thought) =>
                !thought
                    ? res.status(500).json({message: 'no thought with id'})
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err))
    },
    // Create a thought
    createThought(req,res) {
        Thoughts.create(req.body)
            .then((thought) => {
                return Users.findOneAndUpdate(
                    {username: req.body.username},
                    {$addToSet: {thoughts: thought._id}},
                    {new:true}
                )
            })
            .then((user) => 
                !user
                    ? res.status(400).json({message: `created but no user with id`})
                    : res.json('created thing')
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            });            
    },
    // Update a thought
    updateThought(req,res) {
        return Thoughts.findOneAndUpdate(
            {_id:req.params._id}, 
            {$set: req.body}, 
            {runValidators: true, new: true}, (err,result) => {
            if(result) {
                res.status(200).json(result)
            } else {
                console.log(err)
                res.status(400).json(err)
            }
        })
    },
    // Delete a thought
    deleteThought(req,res) {
        Thoughts.findOneAndDelete({_id:req.params._id}, (err,results) => {
            if(results) {
                res.status(200).json('Thought has been deleted');
            } else {
                res.status(500).json(err)
            }
        })
    },
    // Add a reaction to a thought
    addReaction(req,res) {        
        Thoughts.findOneAndUpdate(
            {_id: ObjectId(req.params.thoughtId)},
            {$addToSet: {reactions: req.body}},
            {runValidators:true, new: true},            
        )
        .then((thought) =>
            
            !thought
                ? res.status(400).json({message: 'No thought with that id'})
                : res.json(thought)    
        )
        .catch((err) => res.status(500).json(err))
        
    },
    // Delete a reaction to a thought
    deleteReaction(req,res) {
        //console.log(reactionId)
        Thoughts.findOneAndUpdate(
            //console.log(thought),
            {_id: req.params.thoughtId},
            {$pull: {reactions: {reactionId: req.params.reactionId}}},
            {runValidators: true, new: true}
        )
        .then((thought) =>
            !thought
                ? res.status(400).json({message: 'No thought with id'})
                : res.json(thought)
        )
        .catch((err)=> res.status(500).json(err))    
    }
}
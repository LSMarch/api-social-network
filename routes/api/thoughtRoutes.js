const router = require('express').Router();
const {
    getThoughts, 
    getOneThought, 
    createThought, 
    updateThought, 
    deleteThought,
    addReaction,
} = require('../../controllers/thoughtController');

// const  {
//     createReaction
// } = require('../../controllers/reactionController')

router.route('/').get(getThoughts).post(createThought);

router.route('/:_id').get(getOneThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').post(addReaction)



module.exports = router
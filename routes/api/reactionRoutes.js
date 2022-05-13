const router = require('express').Router();

const  {
    createReaction
} = require('../../controllers/reactionController')

router.route('/').post(createReaction)

module.exports = router
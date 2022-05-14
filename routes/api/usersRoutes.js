const router = require('express').Router();
const {
    getUsers, 
    getOneUser, 
    createUser, 
    updateUser, 
    deleteUser,
    addFriend
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends').post(addFriend)

module.exports = router
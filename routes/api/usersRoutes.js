const router = require('express').Router();
const {
    getUsers, getOneUser, createUser, updateUser
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:username').get(getOneUser).put(updateUser);

module.exports = router
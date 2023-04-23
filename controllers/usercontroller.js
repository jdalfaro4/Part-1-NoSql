const User = require('../models/user');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500)
    }
};

const getSingleUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404);
        }
    } catch (err) {
        res.status(500);
    }
};

const createUser = async (req, res) => {
    try {
        User.create(req.body).then((userdata) => {
            res.status(201).json(userdata)
        })

    } catch (err) {
        res.status(500);
    }
};

const updateUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (user) {
            user.username = req.body.username || user.username;
            user.email = req.body.email || user.email;
            const updatedUser = await user.save();
            res.json(updatedUser);
        } else {
            res.status(404);
        }
    } catch (err) {
        res.status(500);
    }
};

const deleteUserById = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.userId);
        if (deletedUser) {
            res.json({ message: 'User deleted' });
        } else {
            res.status(404);
        }
    } catch (err) {
        res.status(500);
    }
};

module.exports = {
    getAllUsers,
    getSingleUserById,
    createUser,
    updateUserById,
    deleteUserById,
};
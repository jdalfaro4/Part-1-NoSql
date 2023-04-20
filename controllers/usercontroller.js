const { User } = require('../models');


const getAllUsers = (req, res) => {
    res.json(User);
};

const getSingleUserById = (req, res) => {
    User.find((u) => u.id === parseInt(req.params.userId));
    if (User) {
        res.json(User);
    } else {
        res.status(404);
    }
};

const createUser = (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
    };
    users.push(user);
    res.status(201).json(user);
};

const updateUserById = (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.userId));
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        res.json(user);
    } else {
        res.status(404);
    }
};

const deleteUserById = (req, res) => {
    const index = users.findIndex((u) => u.id === parseInt(req.params.userId));
    if (index !== -1) {
        users.splice(index, 1);
        res.json({ message: "User deleted" });
    } else {
        res.status(404);
    }
};

module.exports = {
    getAllUsers,
    getSingleUserById,
    createUser,
    updateUserById,
    deleteUserById,
};

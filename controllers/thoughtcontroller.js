
const { Thought } = require('../models');

const getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        console.error(err);
        res.status(500);
    }
};

const findThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
    } catch (err) {
        console.error(err);
        res.status(500);
    }
};


const createThought = async (req, res) => {
    try {
        const { thoughtText, username } = req.body;
        console.log(Thought)
        Thought.create(req.body).then((thoughtdata) => {
            res.status(201).json(thoughtdata)
        });
    } catch (err) {
        console.error(err);
        res.status(500);
    }
};




module.exports = {
    getAllThoughts,
    findThoughtById,
    createThought
};
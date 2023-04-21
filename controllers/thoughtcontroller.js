const thought = require('../models/thought');

const getAllThoughts = async (req, res) => {
    try {
        const thoughts = await thought.find();
        res.json(thoughts);
    } catch (err) {
        console.error(err);
        res.status(500);
    }
};

const findThoughtById = async (req, res) => {
    try {
        const thought = await thought.findById(req.params.thoughtId);
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
        const thought = new thought({ thoughtText, username });
        await thought.save();
        res.json(thought);
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
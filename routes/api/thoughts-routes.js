const router = require('express').Router();

const {
    getAllThoughts,
    createThought,
    findThoughtById,
} = require('../../controllers/thoughtController');

router.route('/api/thought').get(getAllThoughts).post(createThought);

router.route('/:thoughtId').get(findThoughtById);

module.exports = router;
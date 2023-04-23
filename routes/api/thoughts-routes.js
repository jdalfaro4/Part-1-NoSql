const router = require('express').Router();

const {
    getAllThoughts,
    createThought,
    findThoughtById,
} = require('../../controllers/thoughtcontroller');

router.route('/').get(getAllThoughts).post(createThought);

router.route('/:thoughtId').get(findThoughtById);

module.exports = router;
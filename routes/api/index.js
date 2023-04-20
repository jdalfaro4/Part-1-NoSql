const router = require('express').Router();
const thoughtsRoutes = require('./thoughts-routes');
const userRoutes = require('./user-routes');

router.use('/thoughtsRoutes', thoughtsRoutes);
router.use('/userRoutes', userRoutes);

module.exports = router;
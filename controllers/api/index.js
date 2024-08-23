const router = require('express').Router();
const driverRoutes = require('./homeRoutes');

router.use('/concerts', homeRoutes);

module.exports = router;

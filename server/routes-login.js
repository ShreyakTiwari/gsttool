const Router = require('express');

const router = Router();

router.use('/users', require('./user/user_api'));

module.exports = router;
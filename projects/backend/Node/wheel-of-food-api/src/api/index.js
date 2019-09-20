const express = require('express');
const userRouter = require('./routes/users');

const router = express.Router();

const api = express();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Hello from API');
});

api.use('/', router);
api.use('/users', userRouter);

module.exports = api;

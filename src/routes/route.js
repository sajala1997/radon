const express = require('express');
const externalModule1 = require('../logger/logger')
const externalModule3 = require('../util/helper')
const externalModule2 = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    externalModule1.welcome()
    externalModule2.trim()
    externalModule2.changetoLowerCase()
    externalModule2.changetoUpperCase()
    externalModule3.printDate()
    externalModule3.printMonth()
    externalModule3.getBatchInfo()
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason
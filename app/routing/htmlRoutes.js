var express = require('express');
var path = require('path');

var router = express.Router();

router.route('/survey').get((req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

router.route('*').get((req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = router;
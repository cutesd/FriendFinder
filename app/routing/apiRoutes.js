var express = require('express');
var path = require('path');
var friends = require('../data/friends.js');

var router = express.Router();

router.route('/friends').get((req, res) => {
    // console.log(Friends.totalDifference([1,2,3,4,5,5,4,3,2,1]));
    // res.send("friends object \n"+ Friends.friends_arr);
    return res.json(friends.friends_arr);
});

router.route('/friends').post((req, res) => {
    var newFriend = req.body;
    console.log("sending data to friends database");
});

module.exports = router;
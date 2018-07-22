var friends_arr = [
    {
        "name": "Sharon Pittaway",
        "photo": "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bee2aae224bc536d92722ebfedf016b4&auto=format&fit=crop&w=500&q=60",
        "scores": [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]
    },
    {
        "name": "Sean Pierce",
        "photo": "https://images.unsplash.com/photo-1513025186107-2688cad44a98?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0622725accc424a8a061f705a3495882&auto=format&fit=crop&w=500&q=60",
        "scores": [
            "4",
            "2",
            "5",
            "1",
            "3",
            "2",
            "2",
            "1",
            "3",
            "2"
        ]
    },
    {
        "name": "Andrew Draper",
        "photo": "https://images.unsplash.com/photo-1498078675142-85259d452c6b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=450f02b67d2c9700de2f53926b46c0f6&auto=format&fit=crop&w=500&q=60",
        "scores": [
            "5",
            "2",
            "2",
            "2",
            "4",
            "1",
            "3",
            "2",
            "5",
            "5"
        ]
    }
]

var totalDifference = (_arr) => {
    var low_obj;
    var new_low = 50;
    // console.log(friends_arr);
    
    friends_arr.forEach(friend => {
        var score = 0;
        // console.log('');
        for (var i = 0; i < friend.scores.length; i++) {
            // console.log('\n', parseInt(friend.scores[i]), '-', parseInt(_arr[i]), "=", Math.abs(parseInt(friend.scores[i]) - parseInt(_arr[i])));
            score += Math.abs(parseInt(friend.scores[i]) - parseInt(_arr[i]));
            // console.log(score);
        }

        // console.log('\n', score, "<", new_low);
        if (score < new_low) {
            new_low = score;
            low_obj = friend;
            // console.log("\n\nNEW LOW!!\n")
            // console.log(new_low, JSON.stringify(low_obj, null, 2));
        }
    });

    return low_obj;

}

module.exports = {
    friends_arr : friends_arr,
    totalDifference : totalDifference
};


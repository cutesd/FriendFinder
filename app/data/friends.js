var friends_arr = [
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
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
        "name": "Jacob Deming",
        "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
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
        "name": "Jeremiah Scanlon",
        "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
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
        console.log('');
        for (var i = 0; i < friend.scores.length; i++) {
            console.log('\n', parseInt(friend.scores[i]), '-', parseInt(_arr[i]), "=", Math.abs(parseInt(friend.scores[i]) - parseInt(_arr[i])));
            score += Math.abs(parseInt(friend.scores[i]) - parseInt(_arr[i]));
            console.log(score);
        }

        console.log('\n', score, "<", new_low);
        if (score < new_low) {
            new_low = score;
            low_obj = friend;
            console.log("\n\nNEW LOW!!\n")
            console.log(new_low, JSON.stringify(low_obj, null, 2));
        }
    });

    return low_obj;

}

module.exports = {
    friends_arr : friends_arr,
    totalDifference : totalDifference
};


// 
        //     "name": "Brendon Barringer",
        //     "photo": "https://www.facebook.com/photo.php?fbid=719680101412930&set=a.403862362994707.88383.100001128418685&type=3&theater",
        //     "scores": [
        //         "5",
        //         "4",
        //         "5",
        //         "1",
        //         "5",
        //         "1",
        //         "4",
        //         "2",
        //         "2",
        //         "2"
        //     ]
        // },
        // {
        //     "name": "Haley Belden",
        //     "photo": "https://scontent-ort2-1.cdninstagram.com/vp/21e840670fbf4d2dc1b6a6567249e427/5BCA9D3E/t51.2885-19/s320x320/11875280_1662005670703450_1134860165_a.jpg",
        //     "scores": [
        //         "5",
        //         "3",
        //         "3",
        //         "1",
        //         "4",
        //         "1",
        //         "4",
        //         "1",
        //         "3",
        //         "1"
        //     ]
        // },
        // {
        //     "name": "liz",
        //     "photo": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjzkP7om67cAhVpqlQKHTpZBucQjRx6BAgBEAU&url=http%3A%2F%2Fwww.kittenlady.org%2F&psig=AOvVaw13H7AON13_hvg0tuEWbwKR&ust=1532194599024310",
        //     "scores": [
        //         "2",
        //         "2",
        //         "4",
        //         "3",
        //         "3",
        //         "3",
        //         "4",
        //         "5",
        //         "3",
        //         "4"
        //     ]
        // },
        // {
        //     "name": "Bob Loblaw",
        //     "photo": "htpp://www.stockimage.com/stockimage.jpg",
        //     "scores": [
        //         "2",
        //         "3",
        //         "4",
        //         "3",
        //         "3",
        //         "3",
        //         "5",
        //         "2",
        //         "3",
        //         "4"
        //     ]
        // },
        // {
        //     "name": "Jon Johnson",
        //     "photo": "https://pbs.twimg.com/profile_images/574769557757280256/MfcP1W1a_400x400.jpeg",
        //     "scores": [
        //         "5",
        //         "4",
        //         "2",
        //         "1",
        //         "1",
        //         "2",
        //         "3",
        //         "3",
        //         "3",
        //         "3"
        //     ]
        // },
        // {
        //     "name": "AR",
        //     "photo": "https://images.unsplash.com/photo-1506784693919-ef06d93c28d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4501e1c9fb53eb2c6c52be4038f53e34&auto=format&fit=crop&w=500&q=60",
        //     "scores": [
        //         "4",
        //         "3",
        //         "4",
        //         "1",
        //         "4",
        //         "3",
        //         "2",
        //         "2",
        //         "2",
        //         "2"
        //     ]
        // },
        // {
        //     "name": "Sue Thomas",
        //     "photo": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F20787%2Fpexels-photo.jpg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26h%3D350&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcat%2F&docid=hVpvvL-HxQGRYM&tbnid=mQT4CIkzpjRPCM%3A&vet=10ahUKEwiE0YjY3a7cAhUs04MKHWJVA3cQMwjiASgAMAA..i&w=525&h=350&bih=588&biw=1366&q=images%20cat&ved=0ahUKEwiE0YjY3a7cAhUs04MKHWJVA3cQMwjiASgAMAA&iact=mrc&uact=8",
        //     "scores": [
        //         "5",
        //         "4",
        //         "3",
        //         "2",
        //         "1",
        //         "1",
        //         "2",
        //         "3",
        //         "3",
        //         "2"
        //     ]
        // },
        // {
        //     "name": "Ztech",
        //     "photo": "https://images.pexels.com/photos/160699/girl-dandelion-yellow-flowers-160699.jpeg?auto=compress&cs=tinysrgb&h=350",
        //     "scores": [
        //         "2",
        //         "3",
        //         "4",
        //         "3",
        //         "5",
        //         "3",
        //         "3",
        //         "3",
        //         "3",
        //         "3"
        //     ]
        // },
        // {
        //     "name": "Daniel",
        //     "photo": "https://vignette.wikia.nocookie.net/selfie-abc/images/d/df/Freddy.jpg/revision/latest?cb=20170423220450",
        //     "scores": [
        //         "4",
        //         "3",
        //         "5",
        //         "1",
        //         "5",
        //         "2",
        //         "3",
        //         "5",
        //         "3",
        //         "2"
        //     ]
        // }
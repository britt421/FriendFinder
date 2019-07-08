//Requiring path and data in friends.js file
var friends = require("..data/friends.js");
var path = require("path");

//Routes
// ================================================

//Exporting functions to send associated HTML pages to corresponding routes
module.exports = function (app) {

    //Link for User to access API friend data
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });


//Method that compares data to make a friend match
// =================================================
app.post("/api/friends", function(req, res) {
    console.log(req.body);

    //Variable to hold the User's score
    var surveyResult = req.body.scores;

    //Looping through the scores and making each one an integer
    for (var i = 0; i < surveyResult.length; i++) {
        surveyResult[i] = parseInt(surveyResult[i]);
    }


    //Variable to store the calculated difference between the User's score and the friends in the array.
    var totalDiff = 100;
    
    //Variable to hold the User's cloest match
    var friendMatch = 0;

    //Looping through the scores in the friends array and created variable tempDiff to compare scores.
    for (i = 0; i < friends.length; i++) {
        var tempDiff = difference(surveyResult, friends[i].scores);
        console.log("This is the difference between", surveyResult, "and", friends[i].name, friends[i].scores, "=", tempDiff);

    //This is a Bubble Sort to compare tempDiff (the score of a friend) to totalDiff (see above).
    //The lower the difference the better the match.
    //If tempDiff < totalDiff then it is the best match so far and the var friendMatch will be updated
    //with the index # of the best match (i.e. lowest difference in scores).

        if (tempDiff < totalDiff) {
            totalDiff = tempDiff;
            friendMatch = i;
        }
    }

    //Calculates the difference between the User array and the Friends array.

        function difference(array1, array2) {
            var amountDiff = 0;

        for (var i = 0; i < array1.length; i++) {
            amountDiff += Math.abs(array[i] - array2[i]);
        }
        return amountDiff;
        }

    //Sends the Friend Match to survey.html
    res.send(friends[friendMatch]);
    });
}
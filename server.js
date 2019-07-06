// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var individuals =  require("./app/data/friends.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js")


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log(htmlRoutes.home);
app.get("/", function(request, response){
    response.sendfile(path.join(__dirname, htmlRoutes.home))
});

var surveyRoute = app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, htmlRoutes.survey));
});

// Displays all individuals
console.log(apiRoutes.individuals)
var apiIndividuals =  app.get(apiRoutes.individuals, function(req, res) {
return res.json(individuals);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});
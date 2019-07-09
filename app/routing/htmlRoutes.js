// // Dependencies
// // ===============================================
var path = require("path");

//Exporting functions that will send the correct HTML page to the corresponding route
module.exports = function (app) {

    //Survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    //Home page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};

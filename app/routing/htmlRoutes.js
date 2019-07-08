// // Dependencies
// // ===============================================
// var path = require("path");

// //Exporting functions that will send the correct HTML page to the corresponding route
// module.exports = function (app) {

//     //Home page
//     app.use(function(req, res) {
//         res.sendFile(path.join(__dirname, "/../public/home.html"));
//     });

//     //Survey page
//     app.get("/survey", function(req, res) {
//         res.sendFile(path.join(__dirname, "/../public/survey.html"));
//     });
// };


var htmlRoutes = {
    home:  "app/public/home.html",
    survey: "app/public/survey.html"
};

module.exports = htmlRoutes

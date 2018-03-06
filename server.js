var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var db = require("./models");
var mongoose = require("mongoose");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static(path.join(__dirname, "public")));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var fetch = require("./controllers/fetch.js");
var headline = require("./controllers/headline.js");
// var note = require("./controllers/note.js");

// Import routes and give the server access to them.
app.use(fetch);
app.use(headline);
// app.use(note);

app.listen(PORT, function() {
	console.log("App now listening at localhost:" + PORT);
});
var express = require("express");
var routerFetch = express.Router();

routerFetch.get("/", function (req, res) {
	res.render("home", {});
});

routerFetch.get("/home", function (req, res) {
	res.render("home", {});
});

routerFetch.get("/saved", function (req, res) {
	res.render("saved", {});
});

// router.post("/api/burgers", function(request, response) {
// 	burger.insertOne(request.body.burger, function(data) {
// 		console.log(data);
// 	});
// });

// router.put("/api/burgers/:id", function(request, response) {
// 	var id = request.params.id;
// 	burger.updateOne(id, function(result) {
// 		console.log(result);
// 	});
// });

module.exports = routerFetch;
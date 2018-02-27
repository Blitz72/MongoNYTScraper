var path = require("path");

module.exports = function(app) {

	app.get("/home", function(request, response) {
		response.sendFile(path.join(__dirname, "../../public/home.handlebars"));
	});

	app.get("/saved", function(request, response) {
		response.sendFile(path.join(__dirname, "../public/saved.handlebars"))
	});

	app.get("*", function(request, response) {
		response.sendFile(path.join(__dirname, "../../public/home.handlebars"));
	});

}
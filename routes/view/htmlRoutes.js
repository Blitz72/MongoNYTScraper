var controllers = require('../../controllers/headline');

module.exports = function(app) {
	app.get('/', controllers.headlines);
	app.get('/saved', controllers.saved);
}

// module.exports = function(app) {

// 	app.get("/", function(request, response) {
// 		response.sendFile(path.join(__dirname, "../../public/home.handlebars"));
// 		// response.sendFile(path.join(__dirname, "../../views/layouts/home.handlebars"));
// 	});

// 	app.get("/saved", function(request, response) {
// 		response.sendFile(path.join(__dirname, "../public/saved.handlebars"));
// 		// response.sendFile(path.join(__dirname, "../../views/layouts/saved.handlebars"));
// 	});

// 	app.get("*", function(request, response) {
// 		response.sendFile(path.join(__dirname, "../../public/home.handlebars"));
// 	});

// }
var controllers = require('../../controllers/fetch');

module.exports = function(app) {
	app.get('/api/fetch', controllers.fetch);
	// app.get('/api/save', controllers.note);
}

var db = require("../models");

module.exports = {
	headlines: function(req, res) {
		db.Headline.find({})
			.then(function(headlines) {
				res.render("home", {
					articles: headlines
				});
			})
			.catch(function(err) {
				res.json(err);
			});
	},
	saved: function(req, res) {
		// TODO: find all saved articles and res.render like above
		db.Headline.find({"saved": true})
			.then(function(headlines) {
				res.render("saved", {
					articles: headlines
				});
			})
			.catch(function(err) {
				res.json(err);
			});
	}
};
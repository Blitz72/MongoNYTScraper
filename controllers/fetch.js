var db = require("../models");
var scrape = require("../scripts/scrape.js");


module.exports = { 
	fetch: function(req, res) {
		scrape(function(headlines) {
			var newHeadlines = 0;
			var linkArray = [];

			// db.Headline.find({})
			// .then(function(oldHeadlines) {
				// console.log(oldHeadlines);
				// oldHeadlines.forEach(function(headline) {
				// 	linkArray.push(headline.link);
					headlines.forEach(function(headline) {
						if (linkArray.indexOf(headline.link) < 0) {		
							db.Headline.create(headline);		//{"title": headline.title, "link": headline.link}
							newHeadlines++;
						} else {
							console.log("This article is already in the db: ", headline.link);
						}
						
						// TODO: for each headline, see if headline exists in the database
						// if it does not exist, insert it and increment newHeadlines.
						// now, return a JSON object indicating the number of new articles we scraped
						// db.Headline.create(headline)
						// res.json({newHeadlines: newHeadlines});
						console.log(headline);
					});
				// });
			
			
			// res.json("home", {newHeadlines: newHeadlines});
			// res.json(newHeadlines);
			// });
			res.redirect("/");
		});
	}
}
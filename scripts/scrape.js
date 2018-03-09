var request = require("request");
var cheerio = require("cheerio");
var db = require("../models");

module.exports =  function(callback) {
	var routeUrl = "http://www.nordbayern.de";

	request(routeUrl, function(error, response, html) {

	  var $ = cheerio.load(html);

	  var headlines = [];
	  
	  $("h2.grid_40").each(function(i, element) {

	  	var result = {};
	  	result.link = routeUrl;

			result.link += $(element).children().attr("href");
	  	result.title = $(element).children().text();
		  // var img = $(element).next().hasClass("grid_11").find("img").attr("src");
		  // let newHeadlines = 0;

		  headlines.push(result);
		  // const checkLink = db.Headline.find({"link": result.link})
		  // 	.then(function() {
		  // 		if (!this.link) {
		  // 			db.Headline.create(result)
				// 	  	.then(function(dbArticle) {
				// 		    console.log(dbArticle);
				// 		  })
				// 		  .catch(function(err) {
				// 		  	return res.json(err);
				// 		  });		//{"title": headline.title, "link": headline.link}
				// 		newHeadlines++;
				// 		} else {
				// 			console.log("This article is already in the db: ", result.link);
				// 		}
		  // 		});

		  // if (!db.Headline.find({"link": result.link})) {		
				// //Save these results to our database
		  // 	db.Headline.create(result)
			 //  	.then(function(dbArticle) {
				//     console.log(dbArticle);
				//   })
				//   .catch(function(err) {
				//   	return res.json(err);
				//   });		//{"title": headline.title, "link": headline.link}
				// newHeadlines++;
				// } else {
				// 	console.log("This article is already in the db: ", result.link);
				// }
	  });

	  callback(headlines);
	});
}
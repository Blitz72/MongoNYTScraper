var express = require("express");
var routerHeadline = express.Router();
var request = require("request");
var cheerio = require("cheerio");

var routeUrl = "http://www.nordbayern.de";

routerHeadline.get("/headlines", function (req, res) {
	var articles = [];
	request(routeUrl, function(error, response, html) {
	  var $ = cheerio.load(html);
	  

	  $("h2.grid_40").each(function(i, element) {
	  	var link = routeUrl;
			link += $(element).children().attr("href");
	  	var title = $(element).children().text();

	  	// var img = $(element).next().hasClass("grid_11").find("img").attr("src");
	  	
		  //   Save these results to our database
	   //  db.scrapedData.insert({
	   //    title: title,
	   //    link: link
	   //  });

	    console.log("title: ", title);
	    console.log("link: ", link);
	    // console.log("img: ", img);
	    console.log("----------------------------------------------------------------------------");

	    articles.push({
	    	title: title,
	    	link: link,
	    	img: img
	    });

	  });
	  console.log("articles: ", articles);
	  res.render("home", {articles: articles});

	});

	// }).done(function() {
	// 	res.render("home", {articles: articles});
	// })
});

module.exports = routerHeadline;
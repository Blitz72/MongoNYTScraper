$("#scrape-btn").on("click", function() {
	console.log("Scrape button clicked!");
	$.get("/headlines");
});

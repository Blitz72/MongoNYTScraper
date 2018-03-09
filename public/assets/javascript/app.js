$("#scrape-btn").on("click", function() {
	console.log("Scrape button clicked!");
	$.getJSON('/api/fetch', function(data) {
		console.log("data: ", data);
		
		// TODO: Update the dialog to show how many new headlines are visible
		// when the user closes the dialog, redirect to the homepage
	});
});

// $("button.close").on("click", function() {
// 	console.log("Close button clicked");
// 	$.ajax({
// 		method: "GET",
// 		url: "/"
// 	});
// });

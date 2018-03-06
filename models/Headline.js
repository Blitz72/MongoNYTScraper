var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HeadlineSchema = new Schema({
	headline: String,
	link: String,
	note: {
		type: Schema.Types.ObjectId,
		ref: "Note"
	}
});

var Headline = mongoose.model("Headline", HeadlineSchema);

module.exports = Headline;
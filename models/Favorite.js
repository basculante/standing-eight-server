const mongoose = require("mongoose");
const { Schema } = mongoose;

const addFavoriteSchema = new Schema({
	videoId: String,
	title: String,
	thumbnailUrl: String,
	source: String,
	favorited: { type: Boolean, default: false },
	_user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("addFavorites", addFavoriteSchema);

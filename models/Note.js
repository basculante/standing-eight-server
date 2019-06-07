const mongoose = require("mongoose");
const { Schema } = mongoose;

const addNoteSchema = new Schema({
	note: String,
	videoId: String,
	_user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("addNote", addNoteSchema);

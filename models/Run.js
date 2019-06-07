const mongoose = require("mongoose");
const { Schema } = mongoose;

const addRunSchema = new Schema({
	hours: Number,
	minutes: Number,
	miles: Number,
	date: Date,
	_user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("addRun", addRunSchema);

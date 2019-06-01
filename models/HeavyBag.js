const mongoose = require("mongoose");
const { Schema } = mongoose;

const addHeavyBagSchema = new Schema({
	minutes: Number,
	seconds: Number,
	minRound: Number,
	rounds: Number,
	totalTime: Number,
	date: Date,
	_user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("addHeavyBag", addHeavyBagSchema);

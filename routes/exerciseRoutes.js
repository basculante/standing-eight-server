const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const addHeavyBag = mongoose.model("addHeavyBag");
const addJumpRope = mongoose.model("addJumpRope");
const addRun = mongoose.model("addRun");

module.exports = app => {
	app.get("/api/heavyBag", requireLogin, async (req, res) => {
		const heavyBag = await addHeavyBag.find({ _user: req.user.id });

		res.send(heavyBag);
	});

	app.post("/api/addHeavyBag", requireLogin, async (req, res) => {
		const { minutes, seconds, minRound, rounds, totalTime, date } = req.body;

		const addHeavyBagRound = new addHeavyBag({
			minutes,
			seconds,
			minRound,
			rounds,
			totalTime,
			date,
			_user: req.user.id
		});

		try {
			addHeavyBag.findOne(
				{
					date,
					_user: req.user.id
				},
				function(err, duplicate) {
					if (!duplicate) {
						addHeavyBagRound.save();
						res.send(req.user);
					} else {
						addHeavyBag.findOneAndUpdate(
							{ minutes, seconds, rounds },
							{ minutes, seconds, rounds }
						);
						addHeavyBagRound.save();
						res.send("Updated!");
					}
				}
			);
		} catch (err) {
			res.status(403).send(err);
		}
	});

	app.post("/api/deleteHeavyBag", requireLogin, async (req, res) => {
		const { entryId } = req.body;

		try {
			await addHeavyBag.deleteOne(
				{ _id: entryId, _user: req.user.id },
				function(err, result) {
					if (!err) {
						res.status(200).send("Deleted!");
					} else {
						res.status(404).send(err);
					}
				}
			);
		} catch (err) {
			res.status(403).send(err);
		}
	});

	app.get("/api/JumpRope", requireLogin, async (req, res) => {
		const JumpRope = await addJumpRope.find({ _user: req.user.id });

		res.send(JumpRope);
	});

	app.post("/api/addJumpRope", requireLogin, async (req, res) => {
		const { minutes, seconds, minRound, rounds, totalTime, date } = req.body;

		const addJumpRopeRound = new addJumpRope({
			minutes,
			seconds,
			minRound,
			rounds,
			totalTime,
			date,
			_user: req.user.id
		});

		try {
			addJumpRope.findOne(
				{
					date,
					_user: req.user.id
				},
				function(err, duplicate) {
					if (!duplicate) {
						addJumpRopeRound.save();
						res.send(req.user);
					} else {
						addJumpRope.findOneAndUpdate(
							{ minutes, seconds, rounds },
							{ minutes, seconds, rounds }
						);
						addJumpRopeRound.save();
						res.send("Updated!");
					}
				}
			);
		} catch (err) {
			res.status(403).send(err);
		}
	});

	app.post("/api/deleteJumpRope", requireLogin, async (req, res) => {
		const { entryId } = req.body;

		try {
			await addJumpRope.deleteOne(
				{ _id: entryId, _user: req.user.id },
				function(err, result) {
					if (!err) {
						res.status(200).send("Deleted!");
					} else {
						res.status(404).send(err);
					}
				}
			);
		} catch (err) {
			res.status(403).send(err);
		}
	});

	app.get("/api/run", requireLogin, async (req, res) => {
		const run = await addRun.find({ _user: req.user.id });

		res.send(run);
	});

	app.post("/api/addRun", requireLogin, async (req, res) => {
		const { hours, minutes, miles, date } = req.body;

		const addRunEntry = new addRun({
			hours,
			minutes,
			miles,
			date,
			_user: req.user.id
		});

		try {
			addRun.findOne(
				{
					date,
					_user: req.user.id
				},
				function(err, duplicate) {
					if (!duplicate) {
						addRunEntry.save();
						res.send(req.user);
					} else {
						addRun.findOneAndUpdate(
							{ hours, minutes, miles },
							{ hours, minutes, miles }
						);
						addRunEntry.save();
						res.send("Updated!");
					}
				}
			);
		} catch (err) {
			res.status(403).send(err);
		}
	});

	app.post("/api/deleteRun", requireLogin, async (req, res) => {
		const { entryId } = req.body;

		try {
			await addRun.deleteOne({ _id: entryId, _user: req.user.id }, function(
				err,
				result
			) {
				if (!err) {
					res.status(200).send("Deleted!");
				} else {
					res.status(404).send(err);
				}
			});
		} catch (err) {
			res.status(403).send(err);
		}
	});
};

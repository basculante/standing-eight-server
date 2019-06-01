const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const addHeavyBag = mongoose.model("addHeavyBag");

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
						const user = req.user.save();
						res.send(req.user);
					} else {
						addHeavyBag.findOneAndUpdate(
							{ minutes, seconds, rounds  },
							{ minutes, seconds, rounds  }
						);
						addHeavyBagRound.save();
						res.send(req.user);
					}
				}
			);
		} catch (err) {
			res.status(403).send(err);
		}
	});
};

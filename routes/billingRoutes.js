const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
	app.post("/api/stripe", requireLogin, async (req, res) => {
		const charge = await stripe.charges.create({
			amount: 99,
			currency: "usd",
			description: "$0.99 for program",
			source: req.body.id
		});

		req.user.programPaid = true;
		const user = await req.user.save();

		res.send(user);
		console.log(req.user);
	});
};

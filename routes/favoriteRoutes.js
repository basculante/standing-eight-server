const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const addFavorite = mongoose.model("addFavorites");

module.exports = app => {
	app.get("/api/favoriteVideos", requireLogin, async (req, res) => {
		const favorites = await addFavorite.find({_user: req.user.id});

		res.send(favorites);
	});
	
	app.post("/api/addFavorite", requireLogin, async (req, res) => {
		const { videoId, title, thumbnailUrl, source } = req.body;

		const addFavoriteVideo = new addFavorite({
			videoId,
			title,
			thumbnailUrl,
			source,
			favorited: true,
			_user: req.user.id
		});

		try {
			addFavorite.findOne(
				{
					videoId: videoId,
					_user: req.user.id
				},
				function(err, video) {
					if (!video) {
						addFavoriteVideo.save();
						const user = req.user.save();
						res.send(req.user);
					} else {
						return res.status(400).send(err);
					}
				}
			);
		} catch (err) {
			res.status(403).send(err);
		}
	});

	app.post("/api/deleteFavorite", requireLogin, async (req, res) => {
		const { videoId } = req.body;
		console.log(videoId);

		try {
			await addFavorite.deleteOne(
				{ videoId: videoId, _user: req.user.id },
				function(err, result) {
					if (!err) {
						res.status(200).send(req.user);
					} else {
						res.status(404).send(err);
					}
				}
			);
		} catch (err) {
			res.status(403).send(err);
		}
	});
};

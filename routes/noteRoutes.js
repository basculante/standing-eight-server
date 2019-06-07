const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const addNote = mongoose.model("addNote");

module.exports = app => {
	app.get("/api/note", requireLogin, async (req, res) => {
		const note = await addNote.find({ _user: req.user.id });

		res.send(note);
	});

	app.post("/api/addNote", requireLogin, async (req, res) => {
		const { note, videoId } = req.body;

		const addNoteEntry = new addNote({
			note,
			videoId,
			_user: req.user.id
		});

		try {
			addNoteEntry.save();
			res.send(req.user);
		} catch (err) {
			res.status(403).send(err);
		}
	});

	app.post("/api/deleteNote", requireLogin, async (req, res) => {
		const { entryId } = req.body;

		try {
			await addNote.deleteOne(
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
};

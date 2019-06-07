import axios from "axios";
import { FETCH_NOTE } from "./types";

export const fetchNote = () => async dispatch => {
	const res = await axios.get("/api/note");

	dispatch({ type: FETCH_NOTE, payload: res.data });
};

export const addNote = (notes, videoId) => async dispatch => {
	await axios.post("/api/addNote", {
		note: notes,
		videoId
	});

	const res = await axios.get("/api/note");

	dispatch({ type: FETCH_NOTE, payload: res.data });
};

export const deleteNote = entryId => async dispatch => {
	await axios.post("/api/deleteNote", { entryId });
	const res = await axios.get("/api/note");

	dispatch({ type: FETCH_NOTE, payload: res.data });
};

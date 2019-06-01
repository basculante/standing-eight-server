import axios from "axios";
import history from "../history";
import { FETCH_USER, FETCH_VIDEOS, FETCH_FAVORITE_VIDEOS } from "./types";

export const fetchVideos = term => async dispatch => {
	const res = await axios.get("./videoList.json");

	dispatch({ type: FETCH_VIDEOS, payload: res.data });
};

export const addFavoriteVideo = (
	videoId,
	title,
	thumbnailUrl,
	source
) => async dispatch => {
	const res = await axios.post("/api/addFavorite", {
		videoId,
		title,
		thumbnailUrl,
		source
	});

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const deleteFavoriteVideo = videoId => async dispatch => {
	console.log(videoId);
	const res = await axios.post("/api/deleteFavorite", { videoId });

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchFavoriteVideos = () => async dispatch => {
	const res = await axios.get("/api/favoriteVideos");

	dispatch({ type: FETCH_FAVORITE_VIDEOS, payload: res.data });
};

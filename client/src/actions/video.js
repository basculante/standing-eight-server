import axios from "axios";
import {  FETCH_VIDEOS, FETCH_FAVORITE_VIDEOS } from "./types";

export const fetchVideos = term => async dispatch => {
	const res = await axios.get("../videoList.json");

	dispatch({ type: FETCH_VIDEOS, payload: res.data });
};

export const addFavoriteVideo = (
	videoId,
	title,
	thumbnailUrl,
	source
) => async dispatch => {
	await axios.post("/api/addFavorite", {
		videoId,
		title,
		thumbnailUrl,
		source
	});

	const res = await axios.get("/api/favoriteVideos");

	dispatch({ type: FETCH_FAVORITE_VIDEOS, payload: res.data });
};

export const deleteFavoriteVideo = videoId => async dispatch => {
	await axios.post("/api/deleteFavorite", { videoId });
	const res = await axios.get("/api/favoriteVideos");

	dispatch({ type: FETCH_FAVORITE_VIDEOS, payload: res.data });
};

export const fetchFavoriteVideos = () => async dispatch => {
	const res = await axios.get("/api/favoriteVideos");

	dispatch({ type: FETCH_FAVORITE_VIDEOS, payload: res.data });
};

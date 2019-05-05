import axios from "axios";
import { FETCH_USER, FETCH_DEFENSE_VIDEOS, FETCH_OFFENSE_VIDEOS } from "./types";

export const fetchUser = () => async dispatch => {
	const res = await axios.get("/api/current_user");

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
	const res = await axios.post("/api/stripe", token);

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchDefenseVideos = (term) => async dispatch => {
	const res = await axios.get("https://www.googleapis.com/youtube/v3/search", {
		params: {
			part: "snippet",
			maxResults: 10,
			key: process.env.REACT_APP_YOUTUBE_API_KEY,
			q: term
		}
	});

	dispatch({ type: FETCH_DEFENSE_VIDEOS, payload: res.data.items });
};

export const fetchOffenseVideos = (term) => async dispatch => {
	const res = await axios.get("https://www.googleapis.com/youtube/v3/search", {
		params: {
			part: "snippet",
			maxResults: 10,
			key: process.env.REACT_APP_YOUTUBE_API_KEY,
			q: term
		}
	});

	dispatch({ type: FETCH_OFFENSE_VIDEOS, payload: res.data.items });
};

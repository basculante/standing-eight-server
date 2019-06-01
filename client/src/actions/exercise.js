import axios from "axios";
import history from "../history";
import { ADD_EXERCISE_ROUND, FETCH_HEAVY_BAG } from "./types";

export const addExerciseRound = (
	minutes,
	seconds,
	rounds,
	date,
	user
) => async dispatch => {
	const minRound = parseInt(minutes) + Math.round((seconds / 60) * 10) / 10;
	const totalTime =
		(parseInt(minutes) + Math.round((seconds / 60) * 10) / 10) *
		parseInt(rounds);
	const res = await axios.post("/api/addHeavyBag", {
		minutes,
		seconds,
		minRound,
		rounds,
		totalTime,
		date
	});

	dispatch({ type: ADD_EXERCISE_ROUND, payload: res.data });
	history.push(`/profile/${user}`)
};

export const fetchHeavyBag = () => async dispatch => {
	const res = await axios.get("/api/heavyBag");

	dispatch({ type: FETCH_HEAVY_BAG, payload: res.data });
};

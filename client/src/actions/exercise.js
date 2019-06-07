import axios from "axios";
import history from "../history";
import {
	FETCH_USER,
	FETCH_HEAVY_BAG,
	FETCH_JUMP_ROPE,
	FETCH_RUN
} from "./types";

export const addHeavyBagRound = (
	minutes,
	seconds,
	rounds,
	date,
	user
) => async dispatch => {
	const minRound = parseInt(minutes) + Math.round((seconds / 60) * 10) / 10;
	const totalTime =
		((parseInt(minutes) + Math.round((seconds / 60) * 10) / 10) * rounds).toFixed(2);
	const res = await axios.post("/api/addHeavyBag", {
		minutes,
		seconds,
		minRound,
		rounds,
		totalTime,
		date
	});

	dispatch({ type: FETCH_USER, payload: res.data });
	history.push(`/profile/${user}`);
};

export const deleteHeavyBagRound = entryId => async dispatch => {
	await axios.post("/api/deleteHeavyBag", { entryId });
	const res = await axios.get("/api/heavyBag");

	dispatch({ type: FETCH_HEAVY_BAG, payload: res.data });
};

export const fetchHeavyBag = () => async dispatch => {
	const res = await axios.get("/api/heavyBag");

	dispatch({ type: FETCH_HEAVY_BAG, payload: res.data });
};

export const addJumpRopeRound = (
	minutes,
	seconds,
	rounds,
	date,
	user
) => async dispatch => {
	const minRound = parseInt(minutes) + Math.round((seconds / 60) * 10) / 10;
	const totalTime = (
		(parseInt(minutes) + Math.round((seconds / 60) * 10) / 10) *
		rounds
	).toFixed(2);
	const res = await axios.post("/api/addJumpRope", {
		minutes,
		seconds,
		minRound,
		rounds,
		totalTime,
		date
	});

	dispatch({ type: FETCH_USER, payload: res.data });
	history.push(`/profile/${user}`);
};

export const deleteJumpRopeRound = entryId => async dispatch => {
	await axios.post("/api/deleteJumpRope", { entryId });
	const res = await axios.get("/api/JumpRope");

	dispatch({ type: FETCH_JUMP_ROPE, payload: res.data });
};

export const fetchJumpRope = () => async dispatch => {
	const res = await axios.get("/api/JumpRope");

	dispatch({ type: FETCH_JUMP_ROPE, payload: res.data });
};

export const addRunEntry = (
	hours,
	minutes,
	miles,
	date,
	user
) => async dispatch => {
	const hoursAdj = Math.floor(minutes / 60) + parseInt(hours);
	const minutesRem = minutes % 60;
	const res = await axios.post("/api/addRun", {
		hours: hoursAdj,
		minutes: minutesRem,
		miles,
		date
	});

	dispatch({ type: FETCH_USER, payload: res.data });
	history.push(`/profile/${user}`);
};

export const deleteRunEntry = entryId => async dispatch => {
	await axios.post("/api/deleteRun", { entryId });
	const res = await axios.get("/api/run");

	dispatch({ type: FETCH_RUN, payload: res.data });
};

export const fetchRun = () => async dispatch => {
	const res = await axios.get("/api/Run");

	dispatch({ type: FETCH_RUN, payload: res.data });
};

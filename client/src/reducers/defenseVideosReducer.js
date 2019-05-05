import { FETCH_DEFENSE_VIDEOS } from "../actions/types";

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_DEFENSE_VIDEOS:
			return action.payload;
		default:
			return state;
	}
}

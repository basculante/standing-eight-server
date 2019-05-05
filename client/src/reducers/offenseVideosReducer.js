import { FETCH_OFFENSE_VIDEOS } from "../actions/types";

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_OFFENSE_VIDEOS:
			return action.payload;
		default:
			return state;
	}
}

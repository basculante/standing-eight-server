import { FETCH_FAVORITE_VIDEOS } from "../actions/types";

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_FAVORITE_VIDEOS:
			return action.payload;
		default:
			return state;
	}
}

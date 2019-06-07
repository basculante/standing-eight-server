import { FETCH_NOTE } from "../actions/types";

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_NOTE:
			return action.payload;
		default:
			return state;
	}
}

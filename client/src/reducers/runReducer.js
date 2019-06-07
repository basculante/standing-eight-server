import { FETCH_RUN } from "../actions/types";

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_RUN:
			return action.payload;
		default:
			return state;
	}
}

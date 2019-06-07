import { FETCH_JUMP_ROPE } from "../actions/types";

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_JUMP_ROPE:
			return action.payload;
		default:
			return state;
	}
}

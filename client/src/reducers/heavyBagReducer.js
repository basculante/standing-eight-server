import { FETCH_HEAVY_BAG } from "../actions/types";

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_HEAVY_BAG:
			return action.payload;
		default:
			return state;
	}
}

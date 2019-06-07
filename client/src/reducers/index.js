import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";
import videosReducer from "./videosReducer";
import favoriteVideosReducer from "./favoriteVideosReducer";
import heavyBagReducer from "./heavyBagReducer";
import jumpRopeReducer from "./jumpRopeReducer";
import runReducer from "./runReducer";
import noteReducer from "./noteReducer";

export default combineReducers({
	auth: authReducer,
	form: formReducer,
	videos: videosReducer,
	favoriteVideos: favoriteVideosReducer,
	heavyBag: heavyBagReducer,
	jumpRope: jumpRopeReducer,
	run: runReducer,
	note: noteReducer
});

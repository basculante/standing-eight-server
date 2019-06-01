import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";
import videosReducer from "./videosReducer";
import favoriteVideosReducer from "./favoriteVideosReducer";
import heavyBagReducer from "./heavyBagReducer";

export default combineReducers({
	auth: authReducer,
	form: formReducer,
	videos: videosReducer,
	favoriteVideos: favoriteVideosReducer,
	heavyBag: heavyBagReducer,
});

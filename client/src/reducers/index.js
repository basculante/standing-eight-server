import { combineReducers } from 'redux';
import authReducer from './authReducer';
import defenseVideosReducer from './defenseVideosReducer';
import offenseVideosReducer from './offenseVideosReducer';

export default combineReducers({
	auth: authReducer,
	defenseVideos: defenseVideosReducer,
	offenseVideos: offenseVideosReducer
});
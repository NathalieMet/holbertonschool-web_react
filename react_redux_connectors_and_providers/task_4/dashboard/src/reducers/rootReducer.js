import { combineReducers } from 'redux';
import uiReducer from './uiReducer.js';
import courseReducer from './courseReducer.js';
import notificationReducer from './notificationReducer.js';

const rootReducer = combineReducers({
	ui: uiReducer,
	courses: courseReducer,
	notifications: notificationReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import uiReducer from './uiReducer.js';
import courseReducer from './courseReducer.js';
import notificationReducer from './notificationReducer.js';

const rootReducer = combineReducers({
	ui: uiReducer,
	notifications: notificationReducer,
	courses: courseReducer,
});

export default rootReducer;

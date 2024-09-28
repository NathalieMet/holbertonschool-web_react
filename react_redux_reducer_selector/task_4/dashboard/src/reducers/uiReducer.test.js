import uiReducer from './uiReducer';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/uiActionTypes';
import { SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('Reducer', () => {
	it('verifies that the state returned by the uiReducer function equals the initial state when no action is passed', () => {
		const expectedstate = {
			isNotificationDrawerVisible: false,
			isUserLoggedIn: false,
			user: {}
		};
		expect(uiReducer(undefined, {}).toJS()).toEqual(expectedstate);
	});

	it('verifies that the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
		const expectedstate = {
			isNotificationDrawerVisible: false,
			isUserLoggedIn: false,
			user: {}
		};
		expect(uiReducer(undefined, {type: SELECT_COURSE}).toJS()).toEqual(expectedstate);
	});

	it('verifies that the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
		const expectedstate = {
			isNotificationDrawerVisible: true,
			isUserLoggedIn: false,
			user: {}
		};
		expect(uiReducer(undefined, {type: DISPLAY_NOTIFICATION_DRAWER}).toJS()).toEqual(expectedstate);
	});
});

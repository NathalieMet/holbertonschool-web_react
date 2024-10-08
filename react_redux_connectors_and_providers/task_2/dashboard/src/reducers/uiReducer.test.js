import { Map } from 'immutable';
import uiReducer from './uiReducer';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/uiActionTypes';
import { SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('Reducer', () => {
	it('verifies that the state returned by the uiReducer function equals the initial state when no action is passed', () => {
		const expectedState = Map({
			isNotificationDrawerVisible: false,
			isUserLoggedIn: false,
			user: Map({})
		});

		// Comparer les objets Immutable avec .toJS() pour les convertir en objets JavaScript
		expect(uiReducer(undefined, {}).toJS()).toEqual(expectedState.toJS());
	});

	it('verifies that the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
		const expectedState = Map({
			isNotificationDrawerVisible: false,
			isUserLoggedIn: false,
			user: Map({})
		});

		expect(uiReducer(undefined, { type: SELECT_COURSE }).toJS()).toEqual(expectedState.toJS());
	});

	it('verifies that the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
		const expectedState = Map({
			isNotificationDrawerVisible: true,
			isUserLoggedIn: false,
			user: Map({})
		});

		expect(uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER }).toJS()).toEqual(expectedState.toJS());
	});


	it('verifies that the state returned by the uiReducer function, when the action LOGIN is passed, changes correctly the user and isuserloggedin property', () => {
		const email = "test@example.com";

		const expectedState = Map({
			isNotificationDrawerVisible: false,
			isUserLoggedIn: true,
			user: Map({
				email: email,
				isLoggedIn: true})
	});

	const action = {
		type: LOGIN,
		user: {
			email: email,
			isLoggedIn: true
		}
	};

	  const initialState = Map({
		isNotificationDrawerVisible: false,
		isUserLoggedIn: false,
		user: Map({})
	  });

	  expect(uiReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
	})
	});

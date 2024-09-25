import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/uiActionTypes';

// Définir l'état initial
const initialState = {
	isNotificationDrawerVisible: false,
	isUserLoggedIn: false,
	user: {}
};

// Définir le réducteur UI
const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'DISPLAY_NOTIFICATION_DRAWER': {
			return {
				...state, // Copie l'état actuel
				isNotificationDrawerVisible: true
			}
		}
		case 'HIDE_NOTIFICATION_DRAWER': {
			return {
				...state,
				isNotificationDrawerVisible: false
			}
		}
		case 'LOGIN_SUCCESS': {
			return {
				...state,
				isUserLoggedIn: true
			}
		}
		case 'LOGIN_FAILURE': {
			return {
				...state,
				isUserLoggedIn: false
			}
		}
		case 'LOGOUT': {
			return {
				...state,
				isUserLoggedIn: false
			}
		}
		default:
			return state
	}
}

export default uiReducer;

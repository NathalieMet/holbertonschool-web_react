import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { Map } from 'immutable';


const initialState = Map({
	notifications: [],
	filter: 'DEFAULT'
});

const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_NOTIFICATIONS_SUCCESS': {
			const notificationsWithSelection = action.data.map(notification => ({
                ...notification,
                isRead: false
            }));

            return state.set('notifications', notificationsWithSelection)
						.set('filter', 'DEFAULT');
        }

		case 'MARK_AS_READ': {
			return state.update('notifications', notifications =>
                notifications.map((notification, index) =>
                    index === action.index ? { ...notification, isRead: true } : notification
                )
            );
        }

		case 'SET_TYPE_FILTER': {
			return state.set('filter', action.filter);
        }

		default:
			return state
	}
}

export default notificationReducer;

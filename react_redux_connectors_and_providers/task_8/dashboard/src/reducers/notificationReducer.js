import { Map, List } from 'immutable';
import { MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from '../actions/notificationActionTypes';

const initialState = Map({
	loading: false,
	notifications: Map({}),
	filter: NotificationTypeFilters.DEFAULT,
});

const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING_STATE:
			return state.set('loading', action.boolean);

		case FETCH_NOTIFICATIONS_SUCCESS:
			console.log('Normalized notifications:', action.data);
			const notifications = action.data.entities.messages || {};
			return state.mergeDeep({
				notifications: Map(notifications), // Insère la liste des notifications dans l'état
			});

		case MARK_AS_READ:
			console.log('mark as read:', action.index);
			console.log('notifications in reducer:', state.notifications);
			const messageId = action.index;
			return state.setIn(['notifications', messageId, 'isRead'], true);

		case SET_TYPE_FILTER:
			return state.set('filter', action.filter);

		default:
			return state;
	}
}

export default notificationReducer;


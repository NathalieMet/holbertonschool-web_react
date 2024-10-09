import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';
import { bindActionCreators } from 'redux';

export const markAsread = (index) => ({
	type: MARK_AS_READ,
	index: index
  });

  export const setNotificationFilter = (filter) => ({
	type: SET_TYPE_FILTER,
	filter: filter
  });

  export const dispatchMarkAsRead = (index) => {
    store.dispatch(markAsread(index));
  };

  export const dispatchSetNotificationFilter = (filter) => {
    store.dispatch(setNotificationFilter(filter));
  };

  export const setLoadingState = (boolean) => ({
    type: SET_LOADING_STATE,
    boolean: boolean
  });

  export const setNotifications = (data) => ({
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: data
  });

  export const fetchNotifications = () => {
    return async (dispatch) => {

      dispatch(setLoadingState(true));

      try {
        const response = await fetch('/notifications.json');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();

        dispatch(setNotifications(result));
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
      dispatch(setLoadingState(false));
      }
    };
  };

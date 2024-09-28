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

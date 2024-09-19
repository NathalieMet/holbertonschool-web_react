import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

export const markAsread = (index) => ({
	type: MARK_AS_READ,
	index: index
  });

  export const setNotificationFilter = (filter) => ({
	type: SET_TYPE_FILTER,
	filter: filter
  });

import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export const markAsread = (index) => ({
	type: MARK_AS_READ,
	index: index
  });

  export const setNotificationFilter = (filter) => ({
	type: SET_TYPE_FILTER,
	filter: filter
  });

  const dispatch = useDispatch();

  const actions = bindActionCreators({ markAsread, setNotificationFilter }, dispatch);

  actions.markAsread(1);
  actions.setNotificationFilter(1);

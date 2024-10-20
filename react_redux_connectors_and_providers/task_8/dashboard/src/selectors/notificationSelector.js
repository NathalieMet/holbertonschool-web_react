
import { createSelector } from 'reselect';

export const filterTypeSelected = state => state.notifications.get('filter');

export const getNotifications = state => state.notifications.get('notifications');

export const getUnreadNotificationsByType = createSelector(
    [filterTypeSelected, getNotifications],
    (filter, notifications) => {
        if (filter === 'urgent') {
            return notifications.filter(notification => !notification.isRead && notification.type === 'urgent');
          }
      else {
        return notifications.filter(notification => !notification.isRead);
      }
    }
  );


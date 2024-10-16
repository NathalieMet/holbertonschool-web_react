
export const filterTypeSelected = state => state.get('filter');

export const getNotifications = state => state.get('notifications');

export const getUnreadNotifications = state => {
    const notifications = state.notifications.get('notifications');
    return notifications.filter(notification => !notification.isRead); 
};


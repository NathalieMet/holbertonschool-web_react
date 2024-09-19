import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

export const login = (email, password) => ({
  type: LOGIN,
  payload: { user : { email, password } }
});

export const logout = (index) => ({
  type: LOGOUT,
  payload: index
});

export const displayNotificationDrawer = (index) => ({
	type: DISPLAY_NOTIFICATION_DRAWER,
	payload: index
  });

export const hideNotificationDrawer = (index) => ({
	type: HIDE_NOTIFICATION_DRAWER,
	payload: index
  });

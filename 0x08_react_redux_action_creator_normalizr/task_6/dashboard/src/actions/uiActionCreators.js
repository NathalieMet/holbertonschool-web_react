import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export const login = (email, password) => ({
  type: LOGIN,
  payload: { user: { email, password } }
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

const dispatch = useDispatch();

const actions = bindActionCreators({ login, logout, displayNotificationDrawer, hideNotificationDrawer }, dispatch);

actions.login(1);
actions.logout(1);
actions.displayNotificationDrawer(1);
actions.hideNotificationDrawer(1);

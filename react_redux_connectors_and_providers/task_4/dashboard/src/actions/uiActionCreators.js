import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import { bindActionCreators } from 'redux';

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password }
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

export const loginSuccess = (index) => ({
  type: LOGIN_SUCCESS,
  payload: index
});

export const loginFailure = (index) => ({
  type: LOGIN_FAILURE,
  payload: index
});

export const dispatchLogin= (email, password) => {
  store.dispatch(login(email, password));
};

export const dispatchLogout = (index) => {
  store.dispatch(logout(index));
};

export const dispatchDisplayNotificationDrawer = (index) => {
  store.dispatch(displayNotificationDrawer(index));
};

export const dispatchhideNotificationDrawer = (index) => {
  store.dispatch( hideNotificationDrawer(index));
};

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    // Dispatch login action
    dispatch(login(email, password));

    try {
      const response = await fetch('/login-success.json');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      // Dispatch login success
      dispatch(loginSuccess(result));
    } catch (error) {
      // Dispatch login failure
      dispatch(loginFailure(error.message));
    }
  };
};

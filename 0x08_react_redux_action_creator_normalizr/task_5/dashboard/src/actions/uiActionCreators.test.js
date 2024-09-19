import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

describe('Action Creators', () => {
  it('should create an action to login', () => {
	const email = 'someemail@mail.com';
	const password = 'somepassword';
    const expectedAction = {
      type: LOGIN,
      payload: { user : { email, password }}
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  it('should create an action to logout', () => {
    const courseId = 1;
    const expectedAction = {
      type: LOGOUT,
      payload: courseId
    };
    expect(logout(courseId)).toEqual(expectedAction);
  });

  it('should create an action to display notification drawer', () => {
    const courseId = 1;
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER,
      payload: courseId
    };
    expect(displayNotificationDrawer(courseId)).toEqual(expectedAction);
  });

  it('should create an action to hide notification drawer', () => {
    const courseId = 1;
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER,
      payload: courseId
    };
    expect(hideNotificationDrawer(courseId)).toEqual(expectedAction);
  });
});

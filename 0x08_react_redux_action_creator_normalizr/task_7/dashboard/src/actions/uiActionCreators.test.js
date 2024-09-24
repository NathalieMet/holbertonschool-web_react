import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginFailure } from './uiActionCreators';
import configureMockStore from 'redux-mock-store';
import { thunk } from 'redux-thunk';
import { loginRequest } from './uiActionCreators';

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

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest action', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    fetchMock.resetMocks(); // Réinitialisez les mocks après chaque test
  });

  it('should dispatch LOGIN and LOGIN_SUCCESS when API call succeeds', async () => {
    const email = 'test@example.com';
    const password = 'password';
    const mockResponse = { userId: 1 }; // Réponse fictive de l'API

    fetchMock.mockResponseOnce(JSON.stringify(mockResponse)); // Simule la réponse de l'API

    await store.dispatch(loginRequest(email, password));

    const actions = store.getActions(); // Récupére les actions dispatchées

    expect(actions[0]).toEqual(login(email, password));
    expect(actions[1]).toEqual(loginSuccess(mockResponse)); // Vérifie l'action LOGIN_SUCCESS
  });

  it('should dispatch LOGIN and LOGIN_FAILURE when API call fails', async () => {
    const email = 'test@example.com';
    const password = 'password';

    fetchMock.mockReject(new Error('API failure')); // Simule une erreur de l'API

    await store.dispatch(loginRequest(email, password));

    const actions = store.getActions(); // Récupére les actions dispatchées

    expect(actions[0]).toEqual(login(email, password)); // Vérifie l'action LOGIN
    expect(actions[1]).toEqual(loginFailure('API failure')); // Vérifie l'action LOGIN_FAILURE
  });
});

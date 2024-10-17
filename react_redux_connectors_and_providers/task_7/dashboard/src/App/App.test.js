import React from 'react';
import { shallow } from 'enzyme';
import { userObject, defaultLogOut, AppContext } from './AppContext';
import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer.js';
import { App, mapStateToProps } from './App';
import { fromJS } from 'immutable';

jest.mock('../path/to/image.png', () => 'image.png');

jest.mock('aphrodite', () => ({
  StyleSheet: {
    create: () => ({}),
  },
  css: () => '',
}));

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    const displayNotificationDrawerMock = jest.fn();
    const hideNotificationDrawerMock = jest.fn();
    const loginMock = jest.fn();

    wrapper = shallow(<App
        displayNotificationDrawer={displayNotificationDrawerMock}
        hideNotificationDrawer={hideNotificationDrawerMock}
        login={loginMock}
        isLoggedIn={false}
      />);
  });

  it('renders App without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should contain Notifications, Header, Footer, Login', () => {

    expect(wrapper.find('Notifications').length).toBe(1);
    expect(wrapper.find('Connect(Header)').length).toBe(1);
    expect(wrapper.find('Login').length).toBe(1);
    expect(wrapper.find('Connect(Footer)').length).toBe(1);
  });

  it('should not display CourseList by default', () => {
    expect(wrapper.find('CourseList').length).toBe(0);
  });

  it('should not display Login when user is logged out', () => {
    wrapper.setProps({ isLoggedIn: true });

    expect(wrapper.find('Login').length).toBe(0);
  });

it('should display CourseList when user is logged in', () => {
  wrapper.setProps({ isLoggedIn: true });

  expect(wrapper.find('CourseList').length).toBe(1);
});
});

describe('<App />', () => {
  let wrapper;
  const logOutMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App login={() => {}} logOut={logOutMock} />);
  });

  it('should call logOut and alert when Ctrl + h is pressed', () => {
    // Mock the alert and logOut functions
    const logOutMock = jest.fn();
    global.alert = jest.fn();

    wrapper = shallow(<App login={() => {}}/>);

    // Simulate keydown event for Ctrl + h
    const event = new KeyboardEvent('keydown', {
      ctrlKey: true,
      key: 'h',
    });

    // Simule l'événement keydown sur la fenêtre globale
    window.dispatchEvent(event);

    // Vérifie si la fonction alert a été appelée avec le bon message
    expect(global.alert).toHaveBeenCalledWith('Logging you out');
  });
});

describe('mapStateToProps', () => {
  it('should return the correct props based on state', () => {
    // Simule l'état Redux avec Immutable.js
    const state = {
      ui: fromJS({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
    })
    };

    // Appelle la fonction mapStateToProps avec l'état simulé
    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: false,
    };

    // Vérifie que mapStateToProps retourne l'objet attendu
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});

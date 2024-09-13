import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { withContext } from 'shallow-with-context';
import { userObject, defaultLogOut, AppContext } from '../App/AppContext';

jest.mock('aphrodite', () => ({
  StyleSheet: {
    create: () => ({}),
  },
  css: () => '',
}));

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('renders App without crashing', () => {
  });

  it('should contain Notifications, Header, Footer, Login', () => {

    expect(wrapper.find('Notifications').length).toBe(1);
    expect(wrapper.find('Header').length).toBe(1);
    expect(wrapper.find('Login').length).toBe(1);
    expect(wrapper.find('Footer').length).toBe(1);
  });

  it('should not display CourseList', () => {
    expect(wrapper.find('CourseList').length).toBe(0);
  });
  it('should have the default state displayDrawer set to false', () => {
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('should set displayDrawer to true when calling handleDisplayDrawer', () => {
    // Appeler handleDisplayDrawer
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('should set displayDrawer to false when calling handleHideDrawer', () => {
    // Modifier l'état pour qu'il soit true au départ
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state('displayDrawer')).toBe(false);
  });
})

describe('App Component', () => {
  it('should not display Login when user is logged out', () => {
    const contextValue = {
      user: {
        email: 'test@example.com',
        isLoggedIn: false,
      },
      logOut: defaultLogOut,
    };

    const WrapperComponent = () => (
      <AppContext.Provider value={contextValue}>
        <App />
      </AppContext.Provider>
    );

    const wrapper = shallow(<WrapperComponent />);

    expect(wrapper.find('Login').length).toBe(0);
  });
});

  it('should display CourseList', () => {
    const contextValue = {
      user: {
        email: 'test@example.com',
        isLoggedIn: true,
      },
      logOut: defaultLogOut,
    };

    const WrapperComponent = () => (
      <AppContext.Provider value={contextValue}>
        <App />
      </AppContext.Provider>
    );
    const wrapper = shallow(<WrapperComponent />);

    expect(wrapper.find('CourseList').length).toBe(1);
  });

// Mock alert function
global.alert = jest.fn();

describe('<App />', () => {
  let wrapper;
  const logOutMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<App logOut={logOutMock} />);
  });

  afterEach(() => {
    // Clear mock calls
    jest.clearAllMocks();
  });

  it('should call logOut and alert when Ctrl + h is pressed', () => {
    // Simulate keydown event for Ctrl + h
    const event = {
      ctrlKey: true,
      key: 'h',
    };

    // Trigger the handleKeyDown method directly
    wrapper.instance().handleKeyDown(event);

    // Check if alert was called with the correct message
    expect(global.alert).toHaveBeenCalledWith('Logging you out');

    // Check if logOut function was called
    expect(logOutMock).toHaveBeenCalled();
  });
});

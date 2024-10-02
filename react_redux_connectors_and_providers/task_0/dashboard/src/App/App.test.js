import React from 'react';
import { shallow, mount } from 'enzyme';
import ConnectedApp from './App';
import { withContext } from 'shallow-with-context';
import { userObject, defaultLogOut, AppContext } from './AppContext';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import uiReducer from '../reducers/uiReducer.js';
import { App, mapStateToProps } from './App';
import { fromJS } from 'immutable';

const store = createStore(uiReducer);

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
    wrapper = mount(
      <Provider store={store}> {/* Enveloppe App avec le Provider */}
        <ConnectedApp />
      </Provider>
    );
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

it('should display CourseList when user is logged in', () => {
  const contextValue = {
    user: {
      email: 'test@example.com',
      isLoggedIn: true,
    },
    logIn: jest.fn(), // Mock the logIn function
    logOut: jest.fn(),
  };

  const wrapper = mount(
    <AppContext.Provider value={contextValue}>
      <App isLoggedIn={true} />
    </AppContext.Provider>
  );

  // Vérifie que le composant 'CourseList' est rendu après la connexion
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
    // Mock the alert and logOut functions
    const logOutMock = jest.fn();
    global.alert = jest.fn();

    const contextValue = {
      user: {
        email: 'test@example.com',
        isLoggedIn: true,
      },
      logOut: logOutMock,
    };

    const wrapper = mount(
      <AppContext.Provider value={contextValue}>
        <App />
      </AppContext.Provider>
    );

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

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
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
});

describe('mapStateToProps', () => {
  it('should return the correct props based on state', () => {
    // Simule l'état Redux avec Immutable.js
    const state = fromJS({
      isUserLoggedIn: true,
    });

    // Appelle la fonction mapStateToProps avec l'état simulé
    const expectedProps = {
      isLoggedIn: true, // Ce qui est attendu
    };

    // Vérifie que mapStateToProps retourne l'objet attendu
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});

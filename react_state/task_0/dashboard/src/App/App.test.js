import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

jest.mock('aphrodite', () => ({
  StyleSheet: {
    create: () => ({}),
  },
  css: () => '',
}));

describe('App Component', () => {
  it('renders App without crashing', () => {
    shallow(<App />);
  });

  it('should contain Notifications, Header, Footer, Login', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Notifications').length).toBe(1);
    expect(wrapper.find('Header').length).toBe(1);
    expect(wrapper.find('Login').length).toBe(1);
    expect(wrapper.find('Footer').length).toBe(1);
  });

  it('should not display CourseList', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList').length).toBe(0);
  });
})

describe('App Component', () => {
  it('should not display login', () => {
    const wrapper = shallow(<App isLoggedIn={true}/>);
    expect(wrapper.find('Login').length).toBe(0);
  });

  it('should display CourseList', () => {
    const wrapper = shallow(<App isLoggedIn={true}/>);
    expect(wrapper.find('CourseList').length).toBe(1);
  });

})

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

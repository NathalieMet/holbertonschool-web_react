import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

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
})

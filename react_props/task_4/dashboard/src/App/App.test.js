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

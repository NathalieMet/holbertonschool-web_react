import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

jest.mock('aphrodite', () => ({
  StyleSheet: {
    create: () => ({}), // Mock de la création des styles
  },
  css: () => '', // Mock de l'utilisation de `css`
}));

describe('Login Component', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 2 input and label tags', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.find('input').length).toBe(2);

    expect(wrapper.find('label').length).toBe(2);
  });

});

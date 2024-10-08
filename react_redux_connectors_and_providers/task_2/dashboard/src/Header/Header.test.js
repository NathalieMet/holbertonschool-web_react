import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

jest.mock('aphrodite', () => ({
  StyleSheet: {
    create: () => ({}), // Mock de la création des styles
  },
  css: () => '', // Mock de l'utilisation de `css`
}));

describe('Header Component', () => {

  it('renders without crashing', () => {
      const wrapper = shallow(<Header user={null} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders img and h1 elements', () => {
      const wrapper = shallow(<Header user={null} />);

      // Check if img and h1 elements are rendered
      expect(wrapper.find('img').length).toBe(1);
      expect(wrapper.find('h1').length).toBe(1);
    });
});


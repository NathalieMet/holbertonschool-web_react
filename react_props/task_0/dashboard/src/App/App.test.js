import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  it('renders App without crashing', () => {
    shallow(<App />);
  });
})

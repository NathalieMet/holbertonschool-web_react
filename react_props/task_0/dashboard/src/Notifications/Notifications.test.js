import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {

  // Test that Notifications renders without crashing
  it('renders Notifications without crashing', () => {
    shallow(<Notifications />);
  });
})

import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {

  // Test that NotificationItem renders without crashing
  it('renders NotificationItem without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders correctly with type="default" and value="test"', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    // Vérifie que l'élément li a l'attribut data-notification-type avec la valeur "default"
    expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
    // Vérifie que l'élément li contient le texte "test"
    expect(wrapper.find('li').text()).toBe('test');
  });

  it('renders correctly with html={{ __html: "<u>test</u>" }}', () => {
    const htmlProp = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem html={htmlProp} />);
    // Vérifie que l'élément li a le HTML attendu
    expect(wrapper.find('li').html()).toContain('<u>test</u>');
  });

});

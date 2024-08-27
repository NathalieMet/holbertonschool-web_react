import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {

  // Test that Notifications renders without crashing
  it('renders Notifications without crashing', () => {
    shallow(<Notifications displayDrawer={true}/>);
  });
})
  // Test that the component renders three list items
  it('renders three list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('NotificationItem').length).toBe(3);
  });
  // Test that the component renders the text "Here is the list of notifications"
  it('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
  });
  it('renders the first NotificationItem with the correct HTML', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    const firstNotificationItem = wrapper.find('NotificationItem').at(0);

    // On accède au premier NotificationItem et on vérifie son contenu HTML
    expect(firstNotificationItem.html()).toContain('<li class="default" data-notification-type="default">New course available</li>');
  });
  it('should display the menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem').length).toBe(1);
  });
  it('should not display the Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications').length).toBe(0);
  });
  it('should display the menu item when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem').length).toBe(1);
  });
  it('should display the Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    expect(wrapper.find('.Notifications').length).toBe(1);
  });

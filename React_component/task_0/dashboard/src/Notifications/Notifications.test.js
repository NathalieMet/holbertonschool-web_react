import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, html: { __html: getLatestNotification() }, type: "urgent" }
];

describe('Notifications Component with listNotifications', () => {
  let wrapper;

	beforeEach(() => {
	  wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
	});

// Test that the component renders three list items
it('renders three list items', () => {
  expect(wrapper.find('NotificationItem').length).toBe(3);
});

// Test that the component renders the text "Here is the list of notifications"
it('renders the text "Here is the list of notifications"', () => {
  expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
});

it('renders the first NotificationItem with the correct HTML', () => {
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

it('renders list of notifications correctly and with the right number of NotificationItem', () => {
  expect(wrapper.find('NotificationItem').length).toBe(3);
  expect(wrapper.find('NotificationItem').at(0).props()).toEqual({
    type: 'default',
    value: 'New course available',
  });

  expect(wrapper.find('NotificationItem').at(1).props()).toEqual({
    type: 'urgent',
    value: 'New resume available',
  });

  expect(wrapper.find('NotificationItem').at(2).props()).toEqual({
    type: 'urgent',
    html: { __html: getLatestNotification() }
  });
});

describe('Notifications Component without listNotifications', () => {
  let wrapper;

	beforeEach(() => {
	  wrapper = shallow(<Notifications displayDrawer={true} />);
	});

    // Test that Notifications renders without crashing
    it('renders Notifications without crashing', () => {
    });

  it('should display the menu item when displayDrawer is true', () => {
    expect(wrapper.find('.menuItem').length).toBe(1);
  });

  it('should display the Notifications when displayDrawer is true', () => {
    expect(wrapper.find('.Notifications').length).toBe(1);
  });
})

describe('Notifications Component with listNotifications empty', () => {
  let wrapper;

	beforeEach(() => {
	  wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]}/>);
	});
  it('should not display the message "Here is the list of notifications" if listNotifications is empty, but "No new notification for now"', () => {
    expect(wrapper.contains(<li>No new notification for now</li>)).toBe(true);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(false);
  });
  it('should render correctly if you pass an empty array or if you dont pass the listNotifications property', () => {
    expect(wrapper.contains(<li>No new notification for now</li>)).toBe(true);
  });
})
})

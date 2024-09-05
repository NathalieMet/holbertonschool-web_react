import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Notifications from './Notifications';

class NotificationItem extends PureComponent {
  render() {
		const { id, type, html, value, markAsRead } = this.props;
  if (html) {
    return <li className={type} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>;
  }

  return <li className={type} data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>;
}
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem

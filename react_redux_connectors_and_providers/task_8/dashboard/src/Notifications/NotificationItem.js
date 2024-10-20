import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Notifications from './Notifications';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';


class NotificationItem extends PureComponent {
  render() {
	  const { guid, type, html, value, isRead, markAsRead } = this.props;

		return (
			<li className={css(type === 'urgent' ? styles.urgent : styles.default)} data-notification-type={type} onClick={() => markAsRead(guid)}>{value}</li>
		);
}
}

const styles = StyleSheet.create({
	default: {
		color: 'blue',
	'@media (max-width: 900px)': {
		width: '100vw',
		borderBottom: '2px solid black',
		fontSize: '20px',
		padding: '10px 8px',
		listStyleType: 'none',
	},
},

	urgent: {
		color: 'red',
	'@media (max-width: 900px)': {
		width: '100vw',
		borderBottom: '2px solid black',
		fontSize: '20px',
		padding: '10px 8px',
		listStyleType: 'none',
	}
	},
});

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

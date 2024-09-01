import './Notifications.css';
import React from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export default function Notifications({ displayDrawer, listNotifications }) {

	const handleClick = () => {
		console.log('Close button has been clicked');
	};

	return (
		<React.Fragment>
			<div className='menuItem'>
				Your notifications
			</div>
			{displayDrawer && (
				<div className='Notifications'>
					{listNotifications && listNotifications.length > 0 && (
						<p>Here is the list of notifications</p>
					)}
					<button style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none' }} aria-label='Close' onClick={handleClick}>X</button>
					<ul>
						{listNotifications.length > 0 ? (
							listNotifications.map(({ id, html, type, value }) => (
								<NotificationItem key={id} html={html} type={type} value={value} />
							))
						) : (
							<li>No new notification for now</li>
						)}
					</ul>
				</div>
			)}
		</React.Fragment>
	);
}

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
};

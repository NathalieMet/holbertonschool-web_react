import './Notifications.css';
import React from 'react';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

export default function Notifications() {

	const handleClick = () => {
		console.log('Close button has been clicked');
	  };

	return(
		<div className='Notifications'>
		<p>Here is the list of notifications</p>
		<button style= {{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none'}} aria-label='Close' onClick={handleClick}>X</button>
		<ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem
          type="urgent"
          html={{ __html: getLatestNotification() }}
        />
      </ul>
		</div>
		);
}

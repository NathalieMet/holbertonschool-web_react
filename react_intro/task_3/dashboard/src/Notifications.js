import './Notifications.css';
import React from 'react';
import { getLatestNotification } from './utils';

export function Notifications() {

	const handleClick = () => {
		console.log('Close button has been clicked');
	  };

	return(
		<div className='Notifications'>
		<p>Here is the list of notifications</p>
		<button style= {{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none'}} aria-label='Close' onClick={handleClick}>X</button>
		<ul>
			<li className="default">New course available</li>
			<li className="urgent">New resume available</li>
			<li className="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
		</ul>
		</div>
		);
}

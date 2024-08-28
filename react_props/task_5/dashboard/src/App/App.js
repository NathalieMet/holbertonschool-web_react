import React from 'react'
import './App.css'
import Notifications from '../Notifications/Notifications.js'
import Body from '../Login/Login.js'
import Footer from '../Footer/Footer.js'
import Header from '../Header/Header.js'
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js'
import { getLatestNotification } from '../utils/utils';

export default function App({ isLoggedIn }) {
	{
		return (
			<React.Fragment>
				<Notifications listNotifications={listNotifications}/>
				<div className="App">
					<Header />
					{isLoggedIn ? <CourseList listCourses={listCourses} /> : <Body />}
					<Footer />
				</div>
			</React.Fragment>
		);
	}
}

const listCourses = [
	{ id: 1, name: 'ES6', credit: 60 },
	{ id: 2, name: 'Webpack', credit: 20 },
	{ id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
	{ id: 1, type: "default", value: "New course available"},
		{ id: 2, type: "urgent", value: "New resume available"},
		{ id: 3, html: { __html: getLatestNotification() }, type: "urgent"}
];

App.propTypes = {
	isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
	isLoggedIn: false,
};

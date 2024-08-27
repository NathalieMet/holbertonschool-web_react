import React from 'react'
import './App.css'
import Notifications from '../Notifications/Notifications.js'
import Body from '../Login/Login.js'
import Footer from '../Footer/Footer.js'
import Header from '../Header/Header.js'
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js'

export default function App({ isLoggedIn }) { {
	return (
		<React.Fragment>
		<Notifications />
		<div className="App">
			<Header />
			{isLoggedIn ? <CourseList /> : <Body />}
			<Footer />
		</div>
		</React.Fragment>
	);
}
}


App.propTypes = {
	isLoggedIn: PropTypes.bool,
  };

App.defaultProps = {
	isLoggedIn: false,
  };

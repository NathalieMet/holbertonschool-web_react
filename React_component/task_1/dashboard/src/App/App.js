import React, { Component } from 'react';
import './App.css'
import Notifications from '../Notifications/Notifications.js'
import Body from '../Login/Login.js'
import Footer from '../Footer/Footer.js'
import Header from '../Header/Header.js'
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js'
import { getLatestNotification } from '../utils/utils.js';

class App extends Component {

	constructor(props) {
		super(props);
		this.handleKeyDown = this.handleKeyDown.bind(this); // Bind the event handler
	  }

	  componentDidMount() {
		// Add the event listener when the component is mounted
		window.addEventListener('keydown', this.handleKeyDown);
	  }

	  componentWillUnmount() {
		// Remove the event listener when the component is about to unmount
		window.removeEventListener('keydown', this.handleKeyDown);
	  }

	  handleKeyDown(event) {
		if (event.ctrlKey && event.key === 'h') {
		  alert('Logging you out');
		  this.props.logOut();
		}
	  }

	render() {
		const { listNotifications, isLoggedIn, listCourses } = this.props;

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
	logOut: PropTypes.func,
};

App.defaultProps = {
	isLoggedIn: false,
	logOut: () => {},
};

export default App;

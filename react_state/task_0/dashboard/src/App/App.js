import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications.js'
import Body from '../Login/Login.js'
import Footer from '../Footer/Footer.js'
import Header from '../Header/Header.js'
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js'
import { getLatestNotification } from '../utils/utils.js';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js';
import BodySection from '../BodySection/BodySection.js';
import { StyleSheet, css } from 'aphrodite';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = { displayDrawer: false };
		this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
		this.handleHideDrawer = this.handleHideDrawer.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this); // Bind the event handler
	}

	handleDisplayDrawer() {
		console.log("Opening notifications drawer");
		this.setState({ displayDrawer: true });
	}

	handleHideDrawer() {
		console.log("Closing notifications drawer");
		this.setState({ displayDrawer: false });
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
		console.log("Current state of displayDrawer:", this.state.displayDrawer);
		const { isLoggedIn } = this.props;
		const { displayDrawer } = this.state;

		const listCourses = [
			{ id: 1, name: 'ES6', credit: 60 },
			{ id: 2, name: 'Webpack', credit: 20 },
			{ id: 3, name: 'React', credit: 40 },
		];

		const listNotifications = [
			{ id: 1, type: "default", value: "New course available" },
			{ id: 2, type: "urgent", value: "New resume available" },
			{ id: 3, html: { __html: getLatestNotification() }, type: "urgent" }
		];

		return (
			<React.Fragment>
				<Notifications listNotifications={listNotifications}
					displayDrawer={this.state.displayDrawer}
					handleDisplayDrawer={this.handleDisplayDrawer}
					handleHideDrawer={this.handleHideDrawer}
				/>
				<div className="App">
					<Header />
					{isLoggedIn ?
						<BodySectionWithMarginBottom title={"Course list"}><CourseList listCourses={listCourses} /> </BodySectionWithMarginBottom>
						: <BodySectionWithMarginBottom title={"Log in to continue"}><Body className={css(styles.body)} /></BodySectionWithMarginBottom>}
					<BodySection title={"News from the School"} children={"some text"} />
					<Footer />
				</div>
			</React.Fragment>
		);
	}
}

const styles = StyleSheet.create({
	body: {
		paddingBottom: '300px'
	}
});

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	logOut: PropTypes.func,
};

App.defaultProps = {
	isLoggedIn: false,
	logOut: () => { },
};

export default App;

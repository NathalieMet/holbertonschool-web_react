import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js'
import { getLatestNotification } from '../utils/utils.js';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js';
import BodySection from '../BodySection/BodySection.js';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from './AppContext.js';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';


export const mapStateToProps = (state) => {
	return {
	  isLoggedIn: state.get('isUserLoggedIn'), // Utilisation de .get() pour accéder aux valeurs dans le Map Immutable
	  displayDrawer: state.get('isNotificationDrawerVisible'),
	};
};

export const mapDispatchToProps = {
    displayNotificationDrawer,
    hideNotificationDrawer,
};

export class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: {
				email: '',
				password: '',
				isLoggedIn: false,
			},
			listNotifications: [
				{ id: 1, type: "default", value: "New course available" },
				{ id: 2, type: "urgent", value: "New resume available" },
				{ id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
			],
		};

		this.handleKeyDown = this.handleKeyDown.bind(this);
		this.logIn = this.logIn.bind(this);
		this.logOut = this.logOut.bind(this);
		this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
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
			this.logOut();
		}
	}

	logIn(email, password) {
		this.setState({
			user: {
				email: email,
				password: password,
				isLoggedIn: true
			}
		});
	}

	logOut() {
		this.setState({
			user: {
				email: '',
				password: '',
				isLoggedIn: false
			}
		});
	}

	markNotificationAsRead(id) {
		this.setState((prevState) => ({
			listNotifications: prevState.listNotifications.filter(
			  (notification) => notification.id !== id
			),
		  }));
	}

	render() {
		const { listNotifications, user } = this.state;
		const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;

		const listCourses = [
			{ id: 1, name: 'ES6', credit: 60 },
			{ id: 2, name: 'Webpack', credit: 20 },
			{ id: 3, name: 'React', credit: 40 },
		];

		return (
				<AppContext.Provider value={{
				user: this.state.user,
				logIn: this.logIn,
				logOut: this.logOut,
				listNotifications: this.state.listNotifications,
				markNotificationAsRead: this.markNotificationAsRead,
			  }}>
			<React.Fragment>
				<Notifications listNotifications={listNotifications}
					displayDrawer={displayDrawer}
					handleDisplayDrawer={displayNotificationDrawer}
					handleHideDrawer={hideNotificationDrawer}
				/>
				<div className="App">
					<Header />
					{isLoggedIn ? (
						<BodySectionWithMarginBottom title="Course list">
							<CourseList listCourses={listCourses} />
						</BodySectionWithMarginBottom>
					) : (
						<BodySectionWithMarginBottom title="Log in to continue">
							<Login className={css(styles.body)} />
						</BodySectionWithMarginBottom>
					)}
					<BodySection title="News from the School" children="Some news from the school! :D" />
					<Footer />
				</div>
			</React.Fragment>
			</AppContext.Provider>
		);
	}
}

const styles = StyleSheet.create({
	body: {
		paddingBottom: '300px'
	}
});

App.propTypes = {
	displayDrawer: PropTypes.bool,
	displayNotificationDrawer: PropTypes.func.isRequired,
    hideNotificationDrawer: PropTypes.func.isRequired,
};

App.defaultProps = {
	displayDrawer: false,
	displayNotificationDrawer: () => {},
    hideNotificationDrawer: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


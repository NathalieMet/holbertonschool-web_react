import React from 'react'
import './App.css'
import Notifications from '../Notifications/Notifications.js'
import Body from '../Login/Login.js'
import Footer from '../Footer/Footer.js'
import Header from '../Header/Header.js'

export default function App() {
	return (
		<React.Fragment>
		<Notifications />
		<div className="App">
			<Header />
			<Body />
			<Footer />
		</div>
		</React.Fragment>
	);
}

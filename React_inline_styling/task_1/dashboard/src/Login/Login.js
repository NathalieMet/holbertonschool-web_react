import React from 'react'
import { StyleSheet, css } from 'aphrodite';

export default function Login() {
	return (
		<div className="App-body">
		<div className="Login">
			<p className={css(styles.labelEmail)}>Login to access the full dashboard</p>
			<label htmlFor="email" className='label_email'>Email:</label>
			<input type="email" id="email" name="email"></input>
			<label htmlFor="password" className={css(styles.labelEmail)}>Password:</label>
			<input type="password" id="password" name="password"></input>
			<button>OK</button>
		</div>
		</div>
	);
}

const styles = StyleSheet.create({
	  bodyText: {
		fontSize: '25px',
		marginLeft: '3em',
	  },

	  labelEmail: {
		marginLeft: '4.5em'
	  },

	  labelPassword: {
		marginLeft: '1em'
	  }
});

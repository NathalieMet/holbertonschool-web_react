import React from 'react'
import { StyleSheet, css } from 'aphrodite';

export default function Login() {
	return (
		<div className="App-body">
			<div className="Login">
				<p className={css(styles.labelEmail)}>Login to access the full dashboard</p>
				<div className={css(styles.container)}>
					<div className={css(styles.formGroup)}>
						<label htmlFor="email" className='label_email'>Email:</label>
						<input className={css(styles.inputs)} type="email" id="email" name="email"></input>
					</div>
					<div className={css(styles.formGroup)}>
						<label htmlFor="password" className={css(styles.labelEmail)}>Password:</label>
						<input className={css(styles.inputs)} type="password" id="password" name="password"></input>
					</div>
					<button className={css(styles.button)}>OK</button>
				</div>
			</div>
		</div>
	);
}

const styles = StyleSheet.create({
	formGroup: {
		'@media (max-width: 900px)': {
			display: 'flex',
			justifyContent: 'left',
			marginBottom: '15px',
			alignItems: 'center',
		}
	},
	bodyText: {
		fontSize: '25px',
		marginLeft: '3em',
	},

	labelEmail: {
		'@media (max-width: 900px)': {
			marginLeft: '0em'
		},
		marginLeft: '4.5em'
	},

	labelPassword: {
		marginLeft: '1em'
	},

	inputs: {
		'@media (max-width: 900px)': {
			border: 'None'
		}
	},
	button: {
		'@media (max-width: 900px)': {
			border: '3px solid orange',
			backgroundColor: 'white',
			paddingLeft: '0.7em',
			paddingRight: '0.7em',
			width: '3em'
		}
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		'@media (max-width: 900px)': {
			flexDirection: 'column',
		}
	}
});

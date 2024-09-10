import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false,
			email: '',
			password: '',
			enableSubmit: false
		};
		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
	}

	handleLoginSubmit(event) {
		event.preventDefault();
		console.log("handle login submit");
		this.setState({ isLoggedIn: true });
	}

	handleChangeEmail(event) {
		this.setState(
			{ email: event.target.value },
			() => {
				if (this.state.email != '' && this.state.password != '') {
					this.setState({ enableSubmit: true });
				}
				else {
					this.setState({ enableSubmit: false });
				}
			}
			);
	}

	handleChangePassword(event) {
		this.setState(
			{ password: event.target.value },
			() => {
				if (this.state.email != '' && this.state.password != '') {
					this.setState({ enableSubmit: true });
				}
				else {
					this.setState({ enableSubmit: false });
				}
			}
			);
	}

	render() {
		console.log("Current state of email:", this.state.email);
		console.log("Current state of psw:", this.state.password);
		const { email, password, enableSubmit } = this.state;

		return (
			<div className="App-body">
				<div className="Login">
					<p className={css(styles.labelEmail)}>Login to access the full dashboard</p>
					<div className={css(styles.container)}>
						<form className={css(styles.formGroup)} onSubmit={this.handleLoginSubmit}>
							<label htmlFor="email" className='label_email'>Email:</label>
							<input
								className={css(styles.inputs)}
								type="email"
								id="email"
								name="email"
								value={email}
								onChange={this.handleChangeEmail}>
							</input>
						</form>
						<div className={css(styles.formGroup)}>
							<label htmlFor="password" className={css(styles.labelEmail)}>Password:</label>
							<input
								className={css(styles.inputs)}
								type="password"
								id="password"
								name="password"
								value={password}
								onChange={this.handleChangePassword}>
							</input>
						</div>
						<input
							disabled={!enableSubmit}
							onClick={this.handleLoginSubmit}
							type="submit"
							className={css(styles.button)}>
						</input>
					</div>
				</div>
			</div>
		);
	}
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

export default Login;

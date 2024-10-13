import React, { Component } from 'react';
import img1 from '../assets/holberton-logo.jpg'
import { StyleSheet, css } from 'aphrodite'
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';

export const mapStateToProps = (state) => {
	return {
	  user: state.ui.get('user'),
	};
};

export const mapDispatchToProps = {
	logout,
};

export class Header extends Component {

	render() {
		const { user, logout } = this.props;

		return (
			<React.Fragment>
				<header className={css(styles.AppHeader)}>
					<div className={css(styles.headerContent)}>
						<img src={img1} alt="Logo" />
						<h1 className={css(styles.headerContentH1)}>School dashboard</h1>
					</div>
					<div className={css(styles.trait)}></div>
				</header>
				{user && user.get('isLoggedIn') && (
					<p id='logoutSection'>
						Welcome {user.get('email')}{' '}
						<a
							id="logoutclick"
							href="#"
							onClick={logout}
						>
							(logout)
						</a>
					</p>
				)}
			</React.Fragment>
		)
	}
}

const styles = StyleSheet.create({
	AppHeader: {
		display: 'flex',
		justifyContent: 'LEFT',
		flexDirection: 'column'
	},

	headerContent: {
		display: 'flex',
		alignItems: 'center'
	},

	headerContentH1: {
		color: '#E0354B',
		fontSize: '50px'
	},

	trait: {
		borderBottom: '5px solid #E0354B',
		width: '100%',
		marginTop: '5px',
		marginBottom: '2em'
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

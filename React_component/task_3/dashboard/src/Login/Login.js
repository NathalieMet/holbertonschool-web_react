import React from 'react'
import './Login.css'

export default function Login() {
	return (
		<div className="App-body">
		<div className="Login">
			<p>Login to access the full dashboard</p>
			<label htmlFor="email" className='label_email'>Email:</label>
			<input type="email" id="email" name="email"></input>
			<label htmlFor="password" className='label_password'>Password:</label>
			<input type="password" id="password" name="password"></input>
			<button>OK</button>
		</div>
		</div>
	);
}

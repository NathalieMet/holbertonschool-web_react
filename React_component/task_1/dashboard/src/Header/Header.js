import React from 'react'
import img1 from '../assets/holberton-logo.jpg'
import './Header.css'

export default function Header() {
	return (
		<header className="App-header">
      <div className="Header-content">
        <img src={img1} alt="Logo" />
        <h1>School dashboard</h1>
      </div>
			<div className="trait"></div>
    </header>
  );
}

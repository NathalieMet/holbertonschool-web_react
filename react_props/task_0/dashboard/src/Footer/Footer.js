import React from 'react'
import './Footer.css'
import { getFullYear, getFooterCopy } from '../utils/utils.js';

export default function Footer() {
	return (
		<footer className="App-footer">
		<div className="trait"></div>
		Copyright {getFullYear()} - {getFooterCopy(true)}
		</footer>
	);
}

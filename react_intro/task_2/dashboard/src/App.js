import img1 from './holberton-logo.jpg'
import './App.css'
import { getFullYear, getFooterCopy } from './utils.js';

export default function App() {
	return (
		<div className="App">
			<Header />
			<Body />
			<Footer />
		</div>
	);
}

function Header() {
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

function Body() {
	return (
		<body class="App-body">
			<p>Login to access the full dashboard</p>
			<label htmlFor="email" className='label_email'>Email:</label>
			<input type="email" id="email" name="email"></input>
			<label htmlFor="password" className='label_password'>Password:</label>
			<input type="password" id="password" name="password"></input>
			<button>OK</button>
		</body>
	);
}

function Footer() {
	return (
		<footer class="App-footer">
		<div className="trait"></div>
		Copyright {getFullYear()} - {getFooterCopy(true)}
		</footer>
	);
}


import img1 from './holberton-logo.jpg'
import './App.css'

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
		</body>
	);
}

function Footer() {
	return (
		<footer class="App-footer">
		<div className="trait"></div>
		Copyright 2024 - holberton School</footer>
	);
}


import './App.css';
import Login from './Login';
import { NavBar } from './NavBar';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react"

function App() {

	const [currentUser, setCurrentUser] = useState(null)
	const [cookies, setCookies] = useState([])

	useEffect(() => {
		fetch('/me')
		.then(res => {
		if(res.ok) {
			res.json().then(user => {
				console.log(user)
			})
		}
		})
	}, [])

	
	const handleLogout = () => {
		fetch('/logout', {
			method: "DELETE"
		})
		setCurrentUser(null)
	}

	return (
		<div className="App">
			<NavBar handleLogout={handleLogout}/>
			<Routes>
				<Route path='/' element={<Login setCurrentUser={setCurrentUser}/>} />
			</Routes>
		</div>
	);
}

export default App;

import '../App.css';
import Login from './Login';
import { Home } from './Home';
import { NavBar } from './NavBar';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react"

function App() {

	const [currentUser, setCurrentUser] = useState(null)

	useEffect(() => {
		fetch('/me')
		.then(res => {
		if(res.ok) {
			res.json().then(user => {
				setCurrentUser(user)
				console.log(currentUser)
			})
		}
		})
	}, [currentUser])

	
	const handleLogout = () => {
		fetch('/logout', {
			method: "DELETE"
		})
		setCurrentUser(null)
	}

	return (
		<div className="App">
			<div>
				<NavBar handleLogout={handleLogout} currentUser={currentUser}/>
			</div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='login' element={<Login setCurrentUser={setCurrentUser}/>} />
			</Routes>
		</div>
	);
}

export default App;

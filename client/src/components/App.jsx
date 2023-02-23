import '../index.css';
import { NavBar } from './NavBar';
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';

function App() {

	const [currentUser, setCurrentUser] = useState(null)

	const navigate = useNavigate()

	useEffect(() => {
		fetch('/me')
		.then(res => {
		if(res.ok) {
			res.json().then(user => {
				setCurrentUser(user)
				navigate('/')
			})
		}
		})
	}, [])
	
	const handleLogout = () => {
		fetch('/logout', {
			method: "DELETE"
		})
		setCurrentUser(null)
		navigate('/')
	}

	return (
		<>
			<div>
				<NavBar handleLogout={handleLogout} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
			</div>
		</>
	)
}

export default App;

import '../index.css';
import { useState, useEffect } from "react"
import { useNavigate, Link, Outlet } from 'react-router-dom';

function App() {

	const [currentUser, setCurrentUser] = useState(null)
	const navigate = useNavigate()

	useEffect(() => {
		fetch('/me')
		.then(res => {
			if (res.ok) {
				res.json().then(user => setCurrentUser(user))
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

	if (currentUser === null) {
		return (
			<>
				<div>
					<Link to='/'>Home</Link>
					<Link to='/login' setCurrentUser={setCurrentUser}>Login</Link>
					<Link to='/signup'>Sign Up</Link>
				</div>
				<div>
					<Outlet />
				</div>
			</>
		);
	}

	else {
		return (
			<>
				<div>
					<Link to='/'>Home</Link>
					<Link to='/profile' currentUser={currentUser}>Profile</Link>
					<Link to='/settings' currentUser={currentUser}>Settings</Link>
					<Link to='/' onClick={handleLogout}>Logout</Link>
				</div>
				<div>
					<Outlet />
				</div>
			</>
		);
	}
}

export default App;

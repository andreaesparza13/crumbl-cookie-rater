import '../index.css';
import { useState, useEffect } from "react"
import { useNavigate, Link, Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';

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
					<Button variant="outlined"><Link to='/'>Home</Link></Button>
					<Button variant="outlined"><Link to='/login' setCurrentUser={setCurrentUser}>Login</Link></Button>
					<Button variant="outlined"><Link to='/signup'>Sign Up</Link></Button>
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
					<Button variant="outlined"><Link to='/'>Home</Link></Button>
					<Button variant="outlined"><Link to='/profile' currentUser={currentUser}>Profile</Link></Button>
					<Button variant="outlined"><Link to='/settings' currentUser={currentUser}>Settings</Link></Button>
					<Button variant="outlined"><Link to='/' onClick={handleLogout}>Logout</Link></Button>
				</div>
				<div>
					<Outlet />
				</div>
			</>
		);
	}
}

export default App;

import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const NavBar = ({ handleLogout, currentUser, setCurrentUser }) => {
	if (currentUser === null) {
		return (
			<>
				<div>
					<Link to='/'>Home</Link>
					<Link to='/login' currentUser={currentUser} setCurrentUser={setCurrentUser}>Login</Link>
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

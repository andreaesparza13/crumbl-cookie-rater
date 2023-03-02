import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ setCurrentUser }) => {

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [errors, setErrors] = useState([])
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
		fetch('/login', {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password })
		})
		.then(res => {
			if(res.ok) {
				res.json().then(user => {
					setCurrentUser(user)
					navigate("/")
				})
			} else {
				res.json().then(data => setErrors(data.error))
			}
		})
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1>Login</h1>
				<div>
					<input
						type='text'
						placeholder='Username'
						name='username'
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<input
						type='password'
						placeholder='Password'
						name='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
				<div>
					<button type='submit'>Submit</button>
				</div>
				{errors ? <div>{errors}</div> : null}
			</form>
		</div>
	)
}

export default Login
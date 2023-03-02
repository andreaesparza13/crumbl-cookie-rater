import React, { useState } from 'react'

const Signup = ({ setCurrentUser }) => {
   const [first_name, setFirstName] = useState("")
   const [last_name, setLastName] = useState("")
   const [date_of_birth, setDOB] = useState("")
   const [avatar, setAvatar] = useState("")
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [errors, setErrors] = useState([])
	// const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()
		fetch('/signup', {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ first_name, last_name, date_of_birth, avatar, username, password })
		})
		.then(res => {
			if(res.ok) {
				res.json().then(user => {
					setCurrentUser(user)
					// navigate("/")
				})
			} else {
				res.json().then(data => setErrors(data.error))
			}
		})
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1>Create Account</h1>
				<div>
					<input
						type='text'
						placeholder='First Name'
						name='first_name'
						value={first_name}
						onChange={e => setFirstName(e.target.value)}
					/>
				</div>
				<div>
					<input
						type='text'
						placeholder='Last Name'
						name='last_name'
						value={last_name}
						onChange={e => setLastName(e.target.value)}
					/>
				</div>
				<div>
					<input
						type='date'
						placeholder='Date of Birth'
						name='date_of_birth'
						value={date_of_birth}
						onChange={e => setDOB(e.target.value)}
					/>
				</div>
				<div>
					<input
						type='text'
						placeholder='Avatar'
						name='avatar'
						value={avatar}
						onChange={e => setAvatar(e.target.value)}
					/>
				</div>
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
					<button type='submit'>Sign Up</button>
				</div>
				{errors ? <div>{errors}</div> : null}
			</form>
		</div>
	)
}

export default Signup
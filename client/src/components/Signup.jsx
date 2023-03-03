import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import dayjs from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const theme = createTheme();

export default function Signup({ setCurrentUser }) {

	const navigate = useNavigate();
	const [errors, setErrors] = useState([])
   const [birthdate, setBirthdate] = useState(dayjs('2000-01-01'));

   const handleChange = (newValue) => {
      setBirthdate(newValue);
   };

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		fetch('/signup', {
			method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ 
            first_name: data.get('first_name'), 
            last_name: data.get('last_name'), 
            avatar: data.get('avatar'), 
            date_of_birth: data.get('birthdate'), 
            username: data.get('username'), 
            password: data.get('password')
         })
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
	};

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography component="h1" variant="h5">
					Create Account
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="first_name"
						label="First Name"
						name="first_name"
						autoComplete="first_name"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						id="last_name"
						label="Last Name"
						name="last_name"
						autoComplete="last_name"
						// autoFocus
					/>
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                     label="Date of Birth"
                     inputFormat="MM/DD/YYYY"
                     value={birthdate}
                     onChange={handleChange}
                     renderInput={(params) => <TextField {...params} />}
                  />
               </LocalizationProvider>
					<TextField
						margin="normal"
						required
						fullWidth
						id="avatar"
						label="Avatar URL"
						name="avatar"
						autoComplete="avatar"
						// autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						id="username"
						label="Username"
						name="username"
						autoComplete="username"
						// autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
						Sign Up
					</Button>
				</Box>
				{errors ? <div>{errors}</div> : null}
			</Box>
			</Container>
		</ThemeProvider>
	);
}
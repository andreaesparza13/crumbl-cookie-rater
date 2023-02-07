import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = ({ handleLogout, currentUser }) => {

   if (currentUser === null) return (
      <nav>
         <NavLink to='/'>Home</NavLink>
         <NavLink to='/signup'>Sign Up</NavLink>
         <NavLink to='/login'>Log In</NavLink>
      </nav>
   )

   else return (
      <nav>
         <NavLink to='/'>Home</NavLink>
         <NavLink to='/account'>Account</NavLink>
         <NavLink to='/my-ratings'>My Ratings</NavLink>
         <NavLink to='/' onClick={handleLogout}>Log Out</NavLink>
      </nav>
   )
}

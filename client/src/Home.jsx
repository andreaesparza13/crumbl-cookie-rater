import React, { useState, useEffect } from 'react'
import { CookieCard } from './CookieCard'

export const Home = () => {

   const [cookies, setCookies] = useState([])

   useEffect(() => {
      fetch('/cookies')
      .then(res => res.json())
      .then(data => setCookies(data))
   }, [])

   const allCookies = cookies.map(cookie => (
      <CookieCard 
         name={cookie.name}
         release_date={cookie.release_date}
         description={cookie.description}
         average_stars={cookie.average_stars}
         image={cookie.image}
      />
   ))
   return (
      <div>{allCookies}</div>
   )
}

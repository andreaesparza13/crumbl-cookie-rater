import React from 'react'
import { CookieCard } from './CookieCard'
import { useLoaderData, useNavigation } from 'react-router-dom'

const Home = () => {

   const cookieList = useLoaderData()
   const navigation = useNavigation()

   if (navigation.state === "loading") {
      return (
         <h2>Loading...</h2>
      )
   }

   return (
      <div>
         {cookieList.map(cookie => (
            <CookieCard 
               name={cookie.name}
               release_date={cookie.release_date}
               description={cookie.description}
               average_stars={cookie.average_stars}
               image={cookie.image}
            />
         ))}
      </div>
   )
}
   
export default Home

export const dataLoader = async () => {
   const res = await fetch('/cookies')
   const cookies = await res.json()
   return cookies
}
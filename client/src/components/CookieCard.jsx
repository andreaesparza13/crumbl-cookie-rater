import React from 'react'

export const CookieCard = ({ name, description, average_stars, release_date, image }) => {
   return (
      <div>
         <h2>{name}</h2>
         <p>{description}</p>
         <p>Release Date: {release_date}</p>
         <p>Average Rating: {average_stars}</p>
         <img src={image} alt={name} />
      </div>
   )
}

import React from 'react'

export const CookieCard = ({ name, description, average_stars, release_date, image }) => {
   return (
      <div>
         <div>
            <h2>{name}</h2>
         </div>
         <p>Release Date: {release_date}</p>
         <p>{description}</p>
         <p>Average Rating: {average_stars}</p>
         <img className='rounded' src={image} alt={name} />
      </div>
   )
}

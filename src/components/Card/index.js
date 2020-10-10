import React from 'react'

const Card = ({ name, contact, address, rating }) => {
  return(
    <div>
      <h3>{name}</h3>
      <div>
        <h4>Contact:</h4>
        <ul>
          <li>{contact.site}</li>
          <li>{contact.email}</li>
          <li>{contact.phone}</li>
        </ul>
      </div>
      <div>
        <h4>Address:</h4>
        <ul>
          <li>{address.street}</li>
          <li>{address.city}</li>
          <li>{address.state}</li>
        </ul>
      </div>
      <div>
        <h4>Rating: {rating}</h4>
      </div>
    </div>
  )
}

export default Card

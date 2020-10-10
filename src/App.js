import React, { useEffect, useState } from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const proxyURL = 'https://cors-anywhere.herokuapp.com/'
    const url = 'https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json'

    fetch(proxyURL + url)
    .then(res => res.json())
    .then(data => {
      setRestaurants(data)
    })
  }, [])

  return (
    <div className="App-header">
      <Navbar />
      <div className="card_container">
        {
          restaurants.map(({ id, name, contact, address, rating }) => {
            return (
              <Card 
                key={id} 
                name={name} 
                contact={contact} 
                address={address} 
                rating={rating} 
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

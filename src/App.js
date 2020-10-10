import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios'
// import { getRestaurants } from  './services/restaurants'

import Navbar from './components/Navbar'
// import Card from './components/Card'

function App() {
  useEffect(() => {
    axios.get('https://recruiting-datasets.s3.us-east-2.amazonaws.com/data_melp.json')
      .then(res => {
        console.log(res.data)
      })
  }, [])

  return (
    <div>
      <Navbar />
      <div>
        {
          // restaurants.forEach(restaurant => {
          //   console.log(restaurant)
          // })
        }
      </div>
    </div>
  );
}

export default App;

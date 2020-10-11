import React from 'react'
import { FacebookProvider, Like, ShareButton } from 'react-facebook'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import './styles.css'

const containerStyle = {
  width: '100%',
  height: '160px'
};

const Card = ({ 
  name, 
  contact: { site, email, phone }, 
  address: { street, city, state, location: { lat, lng } }, 
  rating 
}) => {
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const center = {
    lat: lat,
    lng: lng
  }

  return(
    <div className="card">
      <LoadScript
        googleMapsApiKey="AIzaSyAdA6tSsSu4CxX1a5npT52WOpzV_udgWhM"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
      <h3 className="name">{name}</h3>
      <div>
        <h4 className="title">Contact:</h4>
        <ul className="list">
          <li>
            <a className="link" href={site} target="_blank" rel="noopener noreferrer">{site}</a>
          </li>
          <li>
            <a className="link" href={`mailto:${email}`}>{email}</a>
          </li>
          <li>
            <a className="link" href={`tel:${phone}`}>{phone}</a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="title">Address:</h4>
        <ul className="list">
          <li className="street">{street}</li>
          <li className="city">{city}</li>
          <li className="city">{state}</li>
        </ul>
      </div>
      <div>
        <h4 className="title">Rating: {rating}</h4>
      </div>
      <div className="fb-btns">
        <FacebookProvider appId="3387903737945972">
          <Like href={site} colorScheme="dark" />
          <ShareButton className="share" href={site}>
            Share
          </ShareButton>
        </FacebookProvider>
      </div>
    </div>
  )
}

export default Card



import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import React, { memo } from 'react'

const GoogleMapComponent = ({geo}) => {
  const {isLoaded}= useLoadScript({
    googleMapsApiKey:"AIzaSyB3WNolScqYqXrCZKXDcD5V8gnaV_Owzj4"
  })
  console.log(isLoaded)
  return (
    <div>
      {!isLoaded?<h1>Loading map...</h1>:<Map lat={+geo.lat} lng={+geo.lng} />}
    </div>
  )
}
const Map=({lat,lng})=>{
const center={lat,lng};
  return <GoogleMap zoom={10} center={center}>
      <Marker position={center} />
  </GoogleMap>
}
export default GoogleMapComponent
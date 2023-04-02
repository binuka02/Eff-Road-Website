import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { socket } from '../socket/socket';

const containerStyle = {
  width: 'auto',
  height: '600px',
  marginLeft : '150px',
  marginRight : '150px',
  borderRadius:'25px'

};

const center = {
  lat: 6.8649,
  lng: 79.8997
};

function Map() {

  const [featureLocations,setFeatureLocations] = useState([])

  const getFeatureLocations = async ()=>{
    const response = await fetch(process.env.REACT_APP_API_URL+'/location');
    const data = await response.json();
    console.log(data);
    setFeatureLocations(data)
  }

  useEffect(()=>{
    getFeatureLocations()
  },[])

  useEffect(()=>{
    socket.on("locationAdded",(data)=>{
      console.log(data);
      const location = {
        id:data.id,
        lat:data.lat,
        lng:data.lng,
        feature:data.feature
      }
      setFeatureLocations(
       [ ...featureLocations,location]
      )
    })

    return ()=>{
      socket.off("locationAdded")
    }
  },[featureLocations])

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBkbxNlUBuctIYho47igu3H3w-JDTwsH7w"
  })
  
  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
      options={{
        mapId:'57d6ea8aeff0c423'
      }}
        mapContainerStyle={containerStyle}
        center={center}
        
        onLoad={onLoad}
        onUnmount={onUnmount}
        className="mw-100"
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
        {featureLocations.map((location)=>{
          return(
            <Marker
            key={location.id}
            position={{
              lat:location.lat,
              lng:location.lng
            }}
            icon={{
              url:require(`../assets/featureImages/${location.feature}.png`),
              scaledSize: new window.google.maps.Size(40, 40), // scaled
              
            }}
            
            />
          )
        })}
        </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)
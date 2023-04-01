import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

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
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)
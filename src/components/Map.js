import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { socket } from '../socket/socket';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";


const containerStyle = {
  width: 'auto',
  height: '600px',
  marginLeft : '150px',
  marginRight : '150px',
  borderRadius:'25px'

};





function Map({selected}) {

  console.log(selected)

  const [latitude,setLat]=useState(null)
  const [longitude,setLng]=useState(null)
  // const [selected, setSelected] = useState(null);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    })
  },[])
  
  console.log(latitude,longitude)
  const center = {
    lat: +latitude,
    lng: +longitude
  };

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

  React.useLayoutEffect(() => {
    socket.on("clearLocation",({id})=>{
    console.log(id);
    const locations = featureLocations.filter((location)=>{
        console.log("location id",location.id===id);
        return location.id !== id
    });
    // console.log("newLocations after delete",locations);
    setFeatureLocations(locations);
    })

   

    
    return () => {
        socket.off("clearLocation");
    }
}, [featureLocations]);

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
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
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
    <>
      
      

      <GoogleMap
      options={{
        mapId:'57d6ea8aeff0c423'
      }}
        mapContainerStyle={containerStyle}
        center={{
          lat:+latitude || 6.8780032,
          lng:+longitude || 79.9408128
        }}
        
        onLoad={onLoad}
        onUnmount={onUnmount}
        className="mw-100"
      >
        { /* Child components, such as markers, info windows, etc. */ }
        
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
        {selected && <Marker position={selected}/>}
      </GoogleMap>

      </>
  ) : <></>
}



export default React.memo(Map)
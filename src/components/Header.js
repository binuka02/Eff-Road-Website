import React from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'



const Header =()=> {



  return (
    
<div className="grid grid-flow-row-dense grid-cols-7 h-72 relative">
  <div className="flex col-span-2 items-center justify-center ">
    <img className="mx-auto h-32" src={require('../assets/logo.jpg')} alt="logo"/>
  </div>
  
  <div className="flex col-span-5 items-center justify-center w-auto">
  <GooglePlacesAutocomplete
      
      apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
    />

  </div>
</div>

   
  )
}



export default Header





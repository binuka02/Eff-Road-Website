import React from 'react'



const Header =()=> {



  return (

    // <div>

    //   <img className="mx-auto h-32" src={require('../assets/logo.jpg')} alt="logo"/>
    // </div>

    <div className="grid grid-flow-row-dense grid-cols-7 h-80 relative">
      <div className=" col-span-3 items-center justify-center pl-24 text-center my-auto">
      <img className="mx-auto h-32" src={require('../assets/logo.jpg')} alt="logo"/>
        <p className="mt-24 text-4xl font-semibold mx-auto">Enjoy your journey with</p>
        <p className="text-red-400 text-3xl font-bold">Good Moments</p>
        <p className="mt-8 text-base">The smarter way to navigate. Our EffRoad mobile app offers real-time updates, turn-by-turn directions, and a range of features to help you get to your destination with ease. With our customizable map views, voice-activated commands, and hands-free operation, you can focus on the road ahead and leave the rest to us.</p>
        <p className="mt-2 font-bold text-gray-700 text-base">TRY EFFROAD TODAY</p>
        <div className="flex justify-center items-center mt-8">
          <a href='https://play.google.com/store/games?pli=1'><img className="h-12 w-34 shadow-2xl hover:scale-95 ease-in duration-300" src={require('../assets/playstore.png')} alt="logo"/></a>
          <a href='https://www.apple.com/app-store/'><img className="h-12 w-36 ml-4 shadow-2xl hover:scale-95 ease-in duration-300" src={require('../assets/appstore.png')} alt="logo"/></a>
        </div>
      </div>
  
      <div className="flex col-span-4 items-center justify-center">
      {/* <GooglePlacesAutocomplete
          
          apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        /> */}
        <img className="mx-auto  h-4/5 " src={require('../assets/device.png')} alt="logo"/>

      </div>
    </div>
 )
}




   
 




export default Header





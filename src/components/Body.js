import React from 'react'
import Map from "./Map";

const Body =()=> {
  return (
    <div>
    <div className="relative text-center ml-72 mr-72 mb-24">
      <p className="text-4xl font-semibold mx-auto">Enjoy your journey with</p>
      <p className="text-red-400 text-3xl font-bold">Good Moments</p>
      <p className="text-base">The smarter way to navigate. Our EffRoad mobile app offers real-time updates, turn-by-turn directions, and a range of features to help you get to your destination with ease. With our customizable map views, voice-activated commands, and hands-free operation, you can focus on the road ahead and leave the rest to us.</p>
      <p className="text-base">Try it today...</p>
    </div>
    <Map/>

    
      
      
      <div className="grid grid-cols-5 gap-4 text-center justify-center mb-64">


        <div className="mt-24 pl-24 text-center col-span-3">
          <p className='text-2xl font-bold text-center '>Landmarks on Map</p>
          <p className='text-gray-500 font-italic text-base mt-8'>EffRoad is a navigation app that allows users to drop pins on the map to report traffic related incidents like 'Accidents', 'Road Closures', 'Traffics', 'Roadside Helps' & 'Police Inspectors'. Other EffRoad users in the area can see these dropped pins on the map and receive alerts about the incidents, which can help them avoid the area or take an alternate route. The ability to see other users' dropped pins in EffRoad is part of the app's community-driven approach, where users can contribute information to help others navigate more efficiently and safely. By working together to share information and report incidents in real-time, EffRoad users can help create a safer and more efficient driving experience for everyone.</p>
        </div>


        <div className="grid grid-cols-2 gap-4  text-center justify-center mt-16 col-span-2 ">
          <div className="mt-10 flex justify-center items-center float-right pl-10">
            <img className="h-10 w-10" src={require('../assets/featureImages/Accident.png')} alt="logo"/>
          </div>
          <div className="mt-10 items-center justify-center flex pr-36">
            <p className='text-base'>Accident</p>
          </div>

          <div className="flex justify-center items-center float-right pl-10">
            <img className="h-10 w-10" src={require('../assets/featureImages/RoadClosure.png')} alt="logo"/>
          </div>
          <div className=" items-center justify-center flex pr-36">
            <p className='text-base'>Road Closure</p>
          </div>

          <div className="flex justify-center items-center float-right pl-10">
            <img className="h-10 w-10" src={require('../assets/featureImages/Traffic.png')} alt="logo"/>
          </div>
          <div className=" items-center justify-center flex pr-36">
            <p className='text-base'>Traffic</p>
          </div>

          <div className="flex justify-center items-center float-right pl-10">
            <img className="h-10 w-10" src={require('../assets/featureImages/RoadsideHelp.png')} alt="logo"/>
          </div>
          <div className=" items-center justify-center flex pr-36">
            <p className='text-base'>Roadside Help</p>
          </div>

          <div className="flex justify-center items-center float-right pl-10">
            <img className="h-8 w-8" src={require('../assets/featureImages/Police.png')} alt="logo"/>
          </div>
          <div className=" items-center justify-center flex pr-36">
            <p className='text-base'>Police Inspector</p>
          </div>
          
        </div>

      </div>




      
    </div>
    
  )
}

export default Body;

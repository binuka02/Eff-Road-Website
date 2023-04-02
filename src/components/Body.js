import React from 'react'
import Map from "../Map/Map";

const Body =()=> {
  return (
    <>
    <div className="items-center ml-72 mr-72 mb-24">
      <p className="text-4xl font-semibold mx-auto">Enjoy your journey with</p><br/>
      <p className="text-red-400 text-3xl font-bold">Good Moments</p><br/>
      <p className="text-base">The smarter way to navigate. Our app offers real-time updates, turn-by-turn directions, and a range of features to help you get to your destination with ease. With our customizable map views, voice-activated commands, and hands-free operation, you can focus on the road ahead and leave the rest to us.</p>
    </div>
    <Map/>
    </>
  )
}

export default Body;

import React from 'react'
import Map from "../Map/Map";

const Body =()=> {
  return (
    <>
    <div class="items-center ml-72 mr-72 mb-24">
      <text class="text-4xl font-semibold mx-auto">Enjoy your journey with</text><br/>
      <text class="text-red-400 text-3xl font-bold">Good Moments</text><br/>
      <text class="text-base">The smarter way to navigate. Our app offers real-time updates, turn-by-turn directions, and a range of features to help you get to your destination with ease. With our customizable map views, voice-activated commands, and hands-free operation, you can focus on the road ahead and leave the rest to us.</text>
    </div>
    <Map/>
    </>
  )
}

export default Body;

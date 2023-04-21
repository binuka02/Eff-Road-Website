import React, { useState } from 'react'
import Map from "./Map";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

const Body =()=> {
  const [selected, setSelected] = useState(null);

  return (
    <div className='relative mt-96'>

    

    <div >
    <p className='text-center pt-20 text-3xl text-gray-700 font-semibold mx-auto font-serif '>EffRoad Map</p>
    
    
    </div>

    
      
      
      <div className="grid grid-cols-5 gap-4 text-center justify-center mb-20">


        <div className="mt-12 pl-24 text-center col-span-3">
          {/* <p className='text-2xl font-bold text-center '>Landmarks on Map</p> */}
          <p className='text-gray-500 font-italic text-base '>EffRoad is a navigation app that allows users to drop pins on the map to report traffic related incidents like 'Accidents', 'Road Closures', 'Traffics', 'Roadside Helps' & 'Police Inspectors'. Other EffRoad users in the area can see these dropped pins on the map and receive alerts about the incidents, which can help them avoid the area or take an alternate route. The ability to see other users' dropped pins in EffRoad is part of the app's community-driven approach, where users can contribute information to help others navigate more efficiently and safely. By working together to share information and report incidents in real-time, EffRoad users can help create a safer and more efficient driving experience for everyone.</p>
          <div className="places-container">
        
      </div>
          <div className='pl-20 pr-20  mt-10'>
      {/* <GooglePlacesAutocomplete
          className="w-full h-10 px-4 py-2 border-rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        /> */}
        <PlacesAutocomplete setSelected={setSelected} />
        </div>
        </div>


        <div className="grid grid-cols-2 gap-4  text-center justify-center  col-span-2 ">
          <div className="mt-10 flex justify-center items-center float-right pl-10">
            <img className="h-10 w-10" src={require('../assets/featureImages/Accident.png')} alt="logo"/>
          </div>
          <div className="mt-10 items-center justify-left flex pr-36">
            <p className='text-lg font-semibold'>Accident</p>
          </div>

          <div className="flex justify-center items-center float-right pl-10">
            <img className="h-10 w-10" src={require('../assets/featureImages/RoadClosure.png')} alt="logo"/>
          </div>
          <div className=" items-center justify-left flex pr-36">
            <p className='text-lg font-semibold'>Road Closure</p>
          </div>

          <div className="flex justify-center items-center float-right pl-10">
            <img className="h-10 w-10" src={require('../assets/featureImages/Traffic.png')} alt="logo"/>
          </div>
          <div className=" items-center justify-left flex pr-36">
            <p className='text-lg font-semibold'>Traffic</p>
          </div>

          <div className="flex justify-center items-center float-right pl-10">
            <img className="h-10 w-10" src={require('../assets/featureImages/RoadsideHelp.png')} alt="logo"/>
          </div>
          <div className=" items-center justify-left flex pr-36">
            <p className='text-lg font-semibold'>Roadside Help</p>
          </div>

          <div className="flex justify-center items-center float-right pl-10">
            <img className="h-8 w-8" src={require('../assets/featureImages/Police.png')} alt="logo"/>
          </div>
          <div className=" items-center justify-left flex pr-36">
            <p className='text-lg font-semibold'>Police Inspector</p>
          </div>
          
        </div>

      </div>

      <Map selected={selected}/>

      <p className='text-center pt-20 text-3xl text-gray-700 font-semibold mx-auto font-serif '>EffRoad Features</p>

      <div className="grid grid-cols-2 gap-4 ml-72 mr-72 mt-10">
        
        <div className="flex-col bg-blue-300 h-48 text-center justify-center items-center pl-14 pr-14">
          <div>
          <img className="mx-auto h-16 hover:scale-105 ease-in duration-200" src={require('../assets/fleet (1).png')} alt="logo"/>
          </div>
          <p className='hover:scale-105 mt-2 text-xl font-semibold mx-auto font-serif my-auto'>Live Traffic Updates</p>
          <p className='text-gray-500 '>EffRoad provides real-time traffic information, including traffic jams, accidents, and road closures. This information is updated constantly by other Waze users and helps drivers find the fastest route to their destination.</p>
        </div>

        <div className="flex-col  h-48 text-center justify-center items-center pl-14 pr-14">
          <div>
          <img className="mx-auto h-16 hover:scale-105 ease-in duration-200" src={require('../assets/compass.png')} alt="logo"/>
          </div>
          <p className='hover:scale-105 mt-2 text-xl font-semibold mx-auto font-serif my-auto'>Navigation Map</p>
          <p className='text-gray-500 '>Users can get directions by giving their destination with the origin or selecting the current location.</p>
        </div>

        <div className="mt-10 flex-col  h-48 text-center justify-center items-center pl-14 pr-14">
          <div>
          <img className="mx-auto h-16 hover:scale-105 ease-in duration-200" src={require('../assets/team.png')} alt="logo"/>
          </div>
          <p className='hover:scale-105 mt-2 text-xl font-semibold mx-auto font-serif my-auto'>Crowd-Sourcing Facility</p>
          <p className='text-gray-500 '>EffRoad is a community-driven app, meaning that users can report incidents, hazards, and police locations. Other users can see these reports and adjust their routes accordingly.</p>
        </div>

        <div className="mt-10 flex-col  h-48 text-center justify-center items-center pl-14 pr-14">
          <div>
          <img className="mx-auto h-16 hover:scale-105 ease-in duration-200" src={require('../assets/road.png')} alt="logo"/>
          </div>
          <p className='hover:scale-105 mt-2 text-xl font-semibold mx-auto font-serif my-auto'>Route Optimization</p>
          <p className='text-gray-500 '>EffRoad  continuously updates the route based on real-time traffic conditions, which helps optimize the route and get to the destination efficiently.</p>
        </div>

        <div className="mt-10 flex-col  h-48 text-center justify-center items-center pl-14 pr-14">
          <div>
          <img className="mx-auto h-16 hover:scale-105 ease-in duration-200" src={require('../assets/emergency-call.png')} alt="logo"/>
          </div>
          <p className='hover:scale-105 mt-2 text-xl font-semibold mx-auto font-serif my-auto'>Emergency Option</p>
          <p className='text-gray-500 '>In an emmergency users can easily get details of nearest hospital & garage. Additionaly can get interact with google places easily through EffRoad.</p>
        </div>
    
  
  
  {/* <div className="bg-green-200 h-24"></div>
  <div className="bg-yellow-200 h-24"></div>
  <div className="bg-purple-200 h-24"></div>
  <div className="bg-pink-200 h-24"></div> */}
</div>
      
    </div>
    
  )
}
const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    console.log(lat,lng);
    setSelected({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder="Search an address"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};
export default Body;

import React from 'react'


const Header =()=> {
  return (
<div className="grid grid-flow-row-dense grid-cols-5 grid-rows-3 h-96">
  <div className="flex col-span-3 items-center justify-center mt-8">
    <img className="mx-auto p-72" src={require('./logo.jpg')} alt="logo"/>
  </div>
  <div className="flex col-span-2 bg-blue-400 ">
    <p className="mx-auto">Image</p>
  </div>
</div>
  )
}

export default Header

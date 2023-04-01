import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header =()=> {
  return (
<div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ">
  <div class="flex items-center bg-red-400">
    <text class=" mx-auto ">EffRoad</text>
  </div>
  <div class="flex col-span-2 bg-blue-400">
    <text class=" mx-auto ">Image</text>
  </div>
</div>
  )
}

export default Header

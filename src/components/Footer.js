import React from 'react'

const Footer =() => {
  return (
    <div className='mt-16 text-center'>
      <p className='font-semibold text-lg'>Need Help</p>
      <p className='font-semibold text-3xl'>Contact Us</p>
      <p className='text-base text-gray-700 mt-4'>effroad@gmail.com</p>
      <p className='text-sm text-gray-700'>+94 771234567</p>
    
      <div className="flex justify-center items-center mt-8">
          <a href='https://play.google.com/store/games?pli=1'><img className="h-12 w-34 shadow-xl hover:scale-95 ease-in duration-300" src={require('../assets/playstore.png')} alt="logo"/></a>
          <a href='https://www.apple.com/app-store/'><img className="h-12 w-36 ml-4 shadow-xl hover:scale-95 ease-in duration-300" src={require('../assets/appstore.png')} alt="logo"/></a>
      </div>
      
      <div className='mb-10'>
        <p className='mt-8 text-xs text-gray-700 my-auto'>© 2023 | All Rights Reserved by <img className=" mx-auto h-8 " src={require('../assets/logo.jpg')} alt="logo"/></p>
       
      </div>

    </div>
  )
}

export default Footer
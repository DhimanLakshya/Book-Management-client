import React, { useState } from 'react'
import { Body, Login } from './AllComponent'


export default function MainHome() {
  const [login, setLogIn] = useState(false);
  

  return (
    <div className='relative ' >
      {
        login ? <Body /> :
          <>
            <div className='relative '><Body /></div>
            <div className=' absolute top-0 bg-black bg-opacity-70 w-full h-full '><Login /></div>
          </>
      }
    </div>
  )
}



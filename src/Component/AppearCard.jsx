import React,{useState} from 'react';
import {Body,Card} from './AllComponent'

export default function AppearCard() {
    const[appear,setappear]=useState(false)
  return (
    <div className='relative'>
       {
        appear ?<Body/>:
        <>
        <div className='relative'><Body/></div>
        <div className='absolute top-0 bg-black bg-opacity-70 w-full h-full '><Card/></div>
        </>
       }
    </div>
  )
}

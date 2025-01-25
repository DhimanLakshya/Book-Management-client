import React from 'react'
import categorybackground from "../images/categorybackground.png"
import mystery1 from "../images/mystery1.PNG"
import mystery2 from "../images/mystery2.PNG"
import mystery3 from "../images/mystery3.PNG"
import mystery4 from "../images/mystery4.PNG"
import mystery5 from "../images/mystery5.PNG"
import mystery6 from "../images/mystery6.PNG"
import mystery7 from "../images/mystery7.PNG"
import mystery8 from "../images/mystery8.PNG"
import mystery9 from "../images/mystery9.PNG"
import mystery10 from "../images/mystery10.PNG"
import spiral from "../images/spiral.png"

export default function ViewCategories() {
  const book = [
    { img: mystery1},
    { img: mystery2},
    { img: mystery3},
    { img: mystery4},
    { img: mystery5},
    { img: mystery6},
    { img: mystery7},
    { img: mystery8},
    { img: mystery9},
    { img: mystery10}
    
  ]
  return (
    <div className='bg-cover bg-center h-[1200px] w-full'style={{ backgroundImage: `url(${categorybackground})` }} >

      <div className='oleo-script-regular pt-[110px] pb-[80px] flex h-[85px] w-full font-extrabold text-white  text-7xl  justify-center items-center'>
      Mystery/ Thriller
      </div>

      <div className=' flex flex-wrap px-5 h-screen justify-between  '>
        {book.map((value,key)=>(
          <div className=' p-3  flex ' key={key}>
          <div className=' relative  bg-white m-5 h-[305px]  rounded-tr-xl rounded-br-xl w-[200px] border-t-4  border-b-4  border-r-4 ring-white'>
            <img className='rounded-tr-xl h-[305px] w-[200px] rounded-br-xl' src={value.img} alt="" />
          </div>
          <div className=' pt-5 pl-2 absolute h-[305px] w-[30px] ' >
            <img className='h-[305px] ' src={spiral} alt="" />
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

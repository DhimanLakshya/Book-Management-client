import React from 'react'
import BannerImg from '../images/Banner.PNG'
import { FaLanguage } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
export default function Banner() {
  return (
    <div >
        <div className="bg-cover bg-center h-[380px] "  style={{ backgroundImage: `url(${BannerImg})` }}>
            <div className='flex justify-center font-bold pr-[200px] pt-[100px] text-[40px] text-[#1a1a1a] gap-2 font-'>Learning <span className='text-[40px] text-[#f09731]'>Never Ends..</span></div>
            <div className='flex justify-center pr-[310px]'>A Single Source Knowledge Repository.</div>
          <div className='flex justify-center py-5  items-center'>
            <button className='flex py-2 px-3  gap-1 text-[#fcf6f6] rounded-l-md border-2 border-green-800 bg-green-800 justify-center items-center'><FaLanguage className='text-[25px]'/>English<IoMdArrowDropdown className='text-[25px]'/></button>
              <i className=" absolute"></i>
              <input className='py-2 px-40 pl-1  border-2 border-[#013d2c] focus:outline-black' type="text" placeholder='Enter Your Search Key...' />
            
            <button className='flex py-2 px-5 text-[#fcf6f6] rounded-r-md border-2 border-green-800 bg-green-800 justify-center items-center'>
             <div className='flex justify-center items-center'>
             <FaSearch className='text-[20px] '/>Search
             </div>
             </button>


          </div>

        
        </div>
        
    </div>
  )
}

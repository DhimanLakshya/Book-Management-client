// import React from 'react'
import BannerImg from '../images/Banner.PNG'
// import { FaLanguage } from "react-icons/fa6";
// import { FaSearch } from "react-icons/fa";
// import { IoMdArrowDropdown } from "react-icons/io";
// export default function Banner() {
//   return (
//     <div >
//         <div className="bg-cover bg-center h-[380px] w-full"  style={{ backgroundImage: `url(${BannerImg})` }}>
//             <div className='flex justify-center font-bold pr-[200px] pt-[100px] text-[40px] text-[#1a1a1a] gap-2 font-'>Learning <span className='text-[40px] text-[#f09731]'>Never Ends..</span></div>
//             <div className='flex justify-center pr-[310px]'>A Single Source Knowledge Repository.</div>
//           <div className='flex justify-center py-5  items-center'>
//             <button className='flex py-2 px-3  gap-1 text-[#fcf6f6] rounded-l-md border-2 border-green-800 bg-green-800 justify-center items-center'><FaLanguage className='text-[25px]'/>English<IoMdArrowDropdown className='text-[25px]'/></button>
//               <i className=" absolute"></i>
//               <input className='py-2 px-40 pl-1  border-2 border-[#013d2c] focus:outline-black' type="text" placeholder='Enter Your Search Key...' />
            
//             <button className='flex py-2 px-5 text-[#fcf6f6] rounded-r-md border-2 border-green-800 bg-green-800 justify-center items-center'>
//              <div className='flex justify-center items-center'>
//              <FaSearch className='text-[20px] '/>Search
//              </div>
//              </button>


//           </div>

        
//         </div>
        
//     </div>
//   )
// }



// Banner.jsx
import React from "react";

const Banner = () => {
  return (
    
    <div className=" relative bg-white flex flex-col items-center">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="w-full h-full object-cover bg-center bg-no-repeat bg-cover"
          src={BannerImg} 
          alt="Books Background"
        />
      </div>

      {/* Content */}
      <div className="relative  text-center p-6 md:p-12">
        <h1 className="text-2xl md:text-6xl font-bold text-gray-800 ">
          Learning <span className="text-orange-500">Never Ends..</span>
        </h1>
        <p className="mt-4 text-md md:text-lg text-gray-600">
          A Single Source Knowledge Repository.
        </p>

        {/* Search Bar */}
        <div className="mt-6 flex justify-center items-center">
          <select
            className="border text-white border-gray-300 rounded-l-md p-2 bg-green-600 "
            defaultValue="English"
          >
            <option value="English">English</option>
            <option value="Spanish">Hindi</option>
            <option value="French">French</option>
            <option value="French">Spanish</option>
            {/* Add more languages as needed */}
          </select>
          <input
            type="text"
            placeholder="Enter Your Search Key..."
            className="flex-grow p-2 border-t border-b border-gray-300 focus:outline-none"
          />
          <button className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

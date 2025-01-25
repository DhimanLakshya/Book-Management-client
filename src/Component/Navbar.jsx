import React, { useState } from 'react'
import logo from '../images/logo.png'
import { CiLogout } from "react-icons/ci";
import { IoIosLogIn } from "react-icons/io";

export default function Navbar() {
  const [loginbtn, setloginbtn] = useState(false)

  return (
    <nav className=' relative flex justify-between py-1 w-full bg-gradient-to-r from-[#02b69b] via-[#0f3a35] to-[#018066]'>
      {/* Left div */}
      <a href='/'>
        <div className='flex h-10 w-25'><img src={logo} alt="logo" />
          <div className='text-[20px] pt-1 text-white '>ज्ञान Shalla</div>
        </div></a>

      {/* right Div */}
      <div className='flex font-bold gap-2 mx-10 text-[#ffff]'>
        {loginbtn ?
          <button>
            <div className='flex justify-center items-center gap-2'>
              <CiLogout className='text-xl' />
              <a href="#/">Logout</a>
            </div>
          </button>
          :
          <button >
            <div className='flex justify-center items-center gap-2'>
              <IoIosLogIn className='text-xl' />
              <a href="/login">LogIn</a>
            </div>
          </button>

        }


      </div>
    </nav>
  )
}

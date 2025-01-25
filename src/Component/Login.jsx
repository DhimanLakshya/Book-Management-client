import React, { useState } from 'react'
import { MdOutlineLogin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa6";
import { FaUserClock } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { IoIosLogIn } from "react-icons/io";





export default function Login() {
    const [value, setValue] = useState({})
    const loginData = (e) => {
        e.preventDefault();
        setValue({ ...value, [e.target.name]: e.target.value })//spread operator
    }
    console.log(value);

    return (

        <div className='flex flex-col shadow-2xl xl mt-8 ml-[500px] rounded-lg bg-[#eaf3e5]  w-[500px] h-[350px]'>
            <div className='flex p-4 text-xl  justify-between text-black shadow-md'>
                <div className=' flex w-[100px]'><MdOutlineLogin className='text-3xl ' />Log-in</div>
                <div className=' gap-5 justify-end items-end  '><a href="/Body"><RxCross1 /></a></div>
            </div>

            <div>
                <div className='flex p-4 text-md  text-black shadow-md items-center'><MdEmail className='text-2xl ' />Email
                    <input onChange={loginData} className='ml-4 mr-4 w-full bg-[#eaf3e5]' name='Email' type="text" />
                </div>
                <div className='flex p-4 text-md  text-black shadow-md items-center'><RiLockPasswordFill className='text-2xl ' />Password
                    <input onChange={loginData} className='ml-4 mr-4 w-full bg-[#eaf3e5]' name='Password' type="text" />
                </div>
                <div className=' flex justify-evenly p-6 shadow-lg'>
                    <a href='/registration'>
                        <div>Do Not Have An Account?
                            <div className='flex pl-7 items-centern gap-1'><FaUserPlus className=' text-xl' /><h1>Register Now</h1></div>
                        </div>
                    </a>
                    <div>Forgot Youe Password?
                        <div className='flex pl-2 text-red-600 items-center gap-1'><FaUserClock className=' text-xl' /><h1>Account Recovery</h1></div>
                    </div>
                </div>
                <div onChange={loginData} className='flex pl-14 pt-4 items-center shadow-lg pb-5'>
                    <input className="form-check-input" type="checkbox" name="gender" id="gender_m" value="Keep Me Logged-in" />
                    <div className='text-lg'>Keep Me Logged-in</div>
                    <div className='flex pl-2'>
                        <button className='flex gap-2 border-2 rounded-lg p-2 bg-green-900 text-white '><IoIosLogIn className=' text-2xl' />Log-in</button>
                        <a href='/'>
                            <button className='flex gap-2 border-2 rounded-lg p-2 bg-green-900 text-white '><RxCross1 className=' text-2xl' />Close</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

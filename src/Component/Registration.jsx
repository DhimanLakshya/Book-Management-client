import React, { useState } from 'react';
import { FaUserPlus } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { RiResetLeftFill } from "react-icons/ri";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import {Server_URL} from './URL'

export default function Registration({ setOtpAuth }) {
  
  
  const [value, setValue] = useState({})
console.log(`${Server_URL}RegisterUser`);
  const Navigator = useNavigate()
  const signUpData = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const BDRegitration = async (e) => {
    e.preventDefault();
    try {
      const url = `${Server_URL}RegisterUser`;

      const signup = await axios.post(url, value)
      const userid = signup.data.id

      if (signup.status === false) alert("Invalid Data")
      else {
        setOtpAuth(true)
        Navigator(`/OtpVerification/${userid}`)
      }
    }
    catch (e) { alert(e.response.data.msg) }
  }


  return (
    <div className='bg-gradient-to-r from-[#02b69b] via-[#0f3a35] to-[#018066] py-3'>
      <div className='h-screen w-[800px] ml-[350px] bg-[#ffff]  border-2 shadow-2xl rounded-xl'>
        <div className=' flex  justify-center gap-1 items-center py-3 text-3xl shadow-sm '>
          <FaUserPlus className=' text-4xl' /><h1>Account Registration</h1>
        </div>
        <div className='ml-8 mr-8 mt-8 shadow-xl '>
          <div className='flex  text-2xl  gap-1 '>
            <FaInfoCircle className='text-3xl' /> <h1>Account Details</h1>
          </div>
          <div className='flex justify-evenly p-2 pt-5'>
            <div className='pl-32'>Name: </div>
            <input onChange={signUpData} className='shadow-lg w-full ml-3' name='First_Name' type="text" placeholder='First Name' required="true"/>
            <input onChange={signUpData} className='shadow-lg w-full' name='Last_Name' type="text" placeholder='Last_Name' />
          </div>
          <div className='flex p-3  '>
            <div className='pl-32 '>Email: </div>
            <input onChange={signUpData} className='shadow-lg ml-3' name='Email' type="text" placeholder='Enter your Email' />
          </div>
          <div className='flex justify-evenly pt-3 pr-3 pb-5'>
            <div className='pl-28'>Password: </div>
            <input onChange={signUpData} className='shadow-lg w-full ml-3 ' name='password' type="password" placeholder='Password' />
            <input onChange={signUpData} className='shadow-lg w-full' name='password' type="password" placeholder='Enter Password Again' />
          </div>


          {/* Personal info */}
          <div className=' mr-1 mt-8 pb-6 '>
            <div className='flex  text-2xl  gap-1 '>
              <FaInfoCircle className='text-3xl' /> <h3>Personal Information</h3>
            </div>
            <div className='flex justify-evenly p-2 pt-5'>
              <div className='pl-20 w-[450px] ' >Date of Birth: </div>
              <input onChange={signUpData} className='shadow-lg w-full text-[#999797]' type="date" name="dob" id="dob" placeholder="Date of birth"
                aria-label="Date of birth" min="1934-12-12" max="2020-12-12"></input>
              <div className=' pl-5 w-[450px] '>Aadhaar no: </div>
              <input onChange={signUpData} className='shadow-lg w-full' name='Aadhaar_no' type="number" placeholder='Enter Aadhaar no' />
            </div>
            <div onChange={signUpData} className='flex p-3 gap-2 '>
              <div className='pl-28 '>Gender: </div>
              <div>
                <input className="form-check-input" type="radio" name="gender" id="gender_m" value="Male" />
                <label className="form-check-label" htmlFor="gender_m">Male</label>
              </div>
              <div>
                <input className="form-check-input" type="radio" name="gender" id="gender_m" value="Female" />
                <label className="form-check-label" htmlFor="gender_m">Female</label>
              </div>
              <div>
                <input className="form-check-input" type="radio" name="gender" id="gender_m" value="Other" />
                <label className="form-check-label" htmlFor="gender_m">Others</label>
              </div>
            </div>
            <div className='flex justify-evenly pt-3 pr-3 pb-5'>
              <div className='pl-28'>Address: </div>
              <input onChange={signUpData} className='shadow-lg ml-3 w-full' name='Address' type="text" placeholder='Enter your Address' />
            </div>
            <div className='flex justify-evenly pt-3 pr-3 pb-5'>
              <div className='pl-16 w-[230px]'>Institute Name: </div>
              <input onChange={signUpData} className='shadow-lg  w-full' name='Institute_Name' type="text" placeholder='Enter Current Institute Name' />
            </div>
            <div className='flex px-40 gap-2'>
              <input onChange={signUpData} className="form-check-input" type="checkbox" name="Policy" id="Policy" value="Privacy Policy"></input>
              <div>I have read, understood and agree to the <span className='text-blue-500'>Privacy Policy</span> and <span className='text-blue-500'>Terms and Conditions</span> of using NDLI.</div>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center pt-10 gap-1'>
          <button onClick={BDRegitration} className='flex gap-2 border-2 rounded-lg p-2 bg-[#898686] text-white'><FaUserPlus className=' text-2xl' />Signup</button>
          <button className='flex gap-2 border-2 rounded-lg p-2 bg-[#f77a0e] text-white'><RiResetLeftFill className=' text-2xl text-white' />Reset</button>
          <a href='/'>
            <button className='flex gap-2 border-2 rounded-lg p-2 bg-green-900 text-white '><RxCross1 className=' text-2xl' />Close</button>

          </a>
        </div>
      </div>
    </div>
  )
}

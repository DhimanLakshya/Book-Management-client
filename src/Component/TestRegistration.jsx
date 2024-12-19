import React,{useState} from 'react';
import { FaUserPlus } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { RiResetLeftFill } from "react-icons/ri";

export default function Registration() {
    const [value,setvalue]=useState({})

    const signupdata=(e)=>{//e=event
        e.preventDefault();
        setvalue({...value,[e.target.name]:e.target.value})
    }
    console.log(value);
  

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
            <input onChange={signupdata} className='shadow-lg w-full ml-3' name='First_name' type="text" placeholder='First Name' />
            <input onChange={signupdata} className='shadow-lg w-full' name='Last_name' type="text" placeholder='Last Name' />
          </div>
          <div onChange={signupdata} className='flex p-3  '>
            <div className='pl-32 '>Email: </div>
            <input  className='shadow-lg ml-3' name='Email' type="text" placeholder='Enter your Email' />
          </div>
          <div onChange={signupdata} className='flex justify-evenly pt-3 pr-3 pb-5'>
            <div className='pl-28'>Password: </div>
            <input  className='shadow-lg w-full ml-3 'name='Password' type="text" placeholder='Password' />
            <input  className='shadow-lg w-full' name='Password_Again' type="text" placeholder='Enter Password Again' />
          </div>


          {/* Personal info */}
          <div className=' mr-1 mt-8 pb-6 '>
            <div className='flex  text-2xl  gap-1 '>
              <FaInfoCircle className='text-3xl' /> <h3>Personal Information</h3>
            </div>
            <div onChange={signupdata} className='flex justify-evenly p-2 pt-5'>
              <div className='pl-20 w-[450px] '>Date of Birth: </div>
              <input  className='shadow-lg w-full text-[#999797]' type="date"  name="dob" id="dob" placeholder="Date of birth"
                aria-label="Date of birth" min="1934-12-12" max="2020-12-12"></input>
              <div className=' pl-5 w-[450px] '>Aadhaar_no: </div>
              <input className='shadow-lg w-full' name='Aadhaar_no' type="number" placeholder='Enter Aadhaar_no' />
            </div>
            <div onChange={signupdata} className='flex p-3 gap-2 '>
              <div className='pl-28 '>Gender: </div>
              <div>
                <input className="form-check-input" type="radio" name="gender" id="gender_m" value="Male"></input>
                <label  className="form-check-label" htmlFor="gender_m">Male</label>
              </div>
              <div>
                <input className="form-check-input" type="radio" name="gender" id="gender_m" value="Female"></input>
                <label className="form-check-label" htmlFor="gender_m">Female</label>
              </div>
              <div>
                <input className="form-check-input" type="radio" name="gender" id="gender_m" value="Others"></input>
                <label className="form-check-label" htmlFor="gender_m">Others</label>
              </div>
            </div>
            <div onChange={signupdata} className='flex justify-evenly pt-3 pr-3 pb-5'>
              <div className='pl-28'>Address: </div>
              <input className='shadow-lg ml-3 w-full' name='Address' type="text" placeholder='Enter your Address' />
            </div>
            <div onChange={signupdata} className='flex justify-evenly pt-3 pr-3 pb-5'>
              <div className='pl-16 w-[230px]'>Institute Name: </div>
              <input className='shadow-lg  w-full' type="text" name='Institute_Name' placeholder='Enter Current Institute Name' />
            </div>
            <div onChange={signupdata} className='flex px-40 gap-2'>
              <input className="form-check-input" type="checkbox" name="gender" id="gender_m" value="m"></input>
              <div>I have read, understood and agree to the <span className='text-blue-500'>Privacy Policy</span> and <span className='text-blue-500'>Terms and Conditions</span> of using NDLI.</div>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center pt-10 gap-1'>
          <button className='flex gap-2 border-2 rounded-lg p-2 bg-[#898686] text-white'><FaUserPlus className=' text-2xl' />Signup</button>
          <button className='flex gap-2 border-2 rounded-lg p-2 bg-[#f77a0e] text-white'><RiResetLeftFill className=' text-2xl text-white' />Reset</button>
          <a href='/'>
            <button className='flex gap-2 border-2 rounded-lg p-2 bg-green-900 text-white '><RxCross1 className=' text-2xl' />Close</button>

          </a>
        </div>
      </div>
    </div>
  )
}

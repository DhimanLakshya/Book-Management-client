import React from 'react'
import logo from '../images/logo.png'
import image from '../images/Body.jpg'
import { FaCaretRight } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaSquareThreads } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='bg-slate-200'>
        
        {/*lower Div */}
        <div className='absolute flex-wrap w-full mt-[280px] '>
        <div className='flex justify-evenly pt-20 text-white bg-[#023520] py-5'>
            <ul className=''>
                <li className='flex text-xl '><div className=' flex justify-center gap-1 items-center'><FaInfoCircle/>About</div></li>
                <a href='/About'>
                <li className='flex pl-4'><div className=' flex justify-center items-center'><FaCaretRight/>About ज्ञान Shala</div></li>
                </a>
                <li className='flex pl-4'><div className=' flex justify-center items-center'><FaCaretRight/>Disclaimer</div></li>
                <li className='flex pl-4'><div className=' flex justify-center items-center'><FaCaretRight/>Sponsor</div></li>
                <li className='flex pl-4'><div className=' flex justify-center items-center'><FaCaretRight/>Privacy Polocy</div></li>
                <li className='flex pl-4'><div className=' flex justify-center items-center'><FaCaretRight/>Terms and Conditions</div></li>
            </ul>
            <ul>
                <li className='flex text-xl'><div className=' flex justify-center gap-1 items-center'><FaQuestionCircle/>Guidelines</div></li>
                <li className='flex pl-4'><div className=' flex justify-center items-center'><FaCaretRight/>Copyright Guide for Indian Libraries</div></li>
                <li className='flex pl-4'><div className=' flex justify-center items-center'><FaCaretRight/>Institutional Registration</div></li>
                <li className='flex pl-4'><div className=' flex justify-center items-center'><FaCaretRight/>Sitemap</div></li>
                <li className='flex pl-4'><div className=' flex justify-center items-center'><FaCaretRight/>Branding</div></li>
                <li className='flex pl-4'><div className=' flex justify-center items-center'><FaCaretRight/>Code of Conduct</div></li>
            </ul>
            <ul>
                <li className='flex text-xl'><div className=' flex justify-center gap-1 items-center'><IoIosCall/> Contact Us</div></li>
                <li className='flex pl-4'><div className=' flex justify-center items-center'><FaCaretRight/>Contact</div></li>
                <li className='flex pl-4'><div className=' flex justify-center items-center'><FaCaretRight/>Feedback</div></li>
            </ul>
            <ul className='flex pt-10'>
                <FaFacebookSquare className='text-5xl'/>
                <FaSquareYoutube className='text-5xl'/>
                <FaSquareThreads className='text-5xl'/>
                <FaTwitterSquare className='text-5xl'/>
                <FaInstagramSquare className='text-5xl'/>
                <FaLinkedin className='text-5xl'/>
            </ul>
        </div>
        </div>
        {/*upper Div */}
        <div className=' flex flex-col pt-5 pl-5 pr-5 relative '>
            <div className='flex  bg-white shadow-2xl shadow-[#3b3a3a] rounded-2xl'>
            <div className=' w-[400px] h-[300px]'>
            <div className='flex pl-4 h-64  '><img src={logo} alt="logo" /></div>
            <div className='flex text-[20px] justify-center font-bold text-black '>ज्ञान Shalla</div>
            </div>
            <div className='w-full sm:w-[800px] pr-4 items-center py-5   '>
                <p className='flex flex-col'><b> ज्ञान Shalla</b> is a virtual repository of learning resources which is not
                just a repository with search/browse facilities but provides a host of services for the learner community.
                Filtered and federated searching is 
                employed to facilitate focused searching so that learners can find the right resource with least effort and
                in minimum time.</p>
                <p className='flex flex-col max-sm:hidden max-sm:'> ज्ञान Shalla  provides user group-specific services such as Examination Preparatory for School and 
                College students and job aspirants. Services for Researchers and general learners are also provided. ज्ञान Shalla
                is designed to hold content of any language and provides interface support for 10 most widely used Indian 
                languages. It is built to provide support for all academic levels including researchers and life-long 
                learners, all disciplines, all popular forms of access devices and differently-abled learners.</p>
            </div>
                <div className='flex  max-sm:hidden '>
                    <img className='flex rounded-r-2xl w-full h-[304px]' src={image} alt="pic" />
                </div>
            </div>
        </div>
        
    </div>
  )
}

import React from 'react'
import { FaInfoCircle } from "react-icons/fa";
import logo from '../images/logo.png'
import { RxCross1 } from "react-icons/rx";



export default function About() {
    return (
        <div className='flex flex-col mt-10 ml-[400px] h-[600px] w-[750px] rounded-lg bg-[#f8f7ec]'>

            <div className='flex items-center p-4 font-bold gap-1 w-full'>
                <div className='flex gap-1 w-full items-center'>
                <FaInfoCircle className='text-2xl' />
                <div>About ज्ञान Shala</div>
                </div>
                <div className='flex justify-end w-full '>
                    <div className=' justify-end'><RxCross1 className=' right-0 flex' /></div>
                </div>
            </div>
            <div className='flex justify-center items-center '><img className='h-[100px] w-[150px] ' src={logo} alt="logo" />
                <div className='text-[20px] pt-3 text-black font-bold '>ज्ञान Shalla</div>
            </div>
            <div className='p-4'>
                ज्ञान Shalla is a virtual repository of learning resources which is not just a repository with search/browse
                facilities but provides a host of services for the learner community. It is sponsored and mentored by
                Ministry of Education, Government of India. Filtered and federated searching is employed to facilitate
                focused searching so that learners can find the right resource with least effort and in minimum time.
                ज्ञान Shalla provides user group-specific services such as Examination Preparatory for School and College
                students and job aspirants. Services for Researchers and general learners are also provided. ज्ञान Shalla is
                designed to hold content of any language and provides interface support for 10 most widely used Indian
                languages. It is built to provide support for all academic levels including researchers and life-long
                learners, all disciplines, all popular forms of access devices and differently-abled learners. It is
                designed to enable people to learn and prepare from best practices from all over the world and to facilitate
                researchers to perform inter-linked exploration from multiple sources. It is developed, operated and
                maintained from Lakshya.
            </div>
            <div className='p-4'>Learn more about this project from <span className='text-blue-500'>here</span>.</div>
            <div className='flex w-full justify-end'>
                <a href='/'>
                    <button className='flex gap-2 border-2 rounded-lg p-2 bg-green-900 text-white '><RxCross1 className=' text-2xl' />Close</button>
                </a>
            </div>
        </div>
    )
}

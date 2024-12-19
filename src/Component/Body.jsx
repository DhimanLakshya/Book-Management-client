import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import carrier from '../images/carrier.PNG'
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { FaCaretRight } from "react-icons/fa";
import clip from '../images/clip.PNG';
import reslogo from "../images/res logo.PNG";
import research from "../images/research.PNG";
import cullogo from "../images/cul.PNG";
import newslogo from "../images/news logo.PNG";
import judlogo from "../images/judlogo.PNG";
import patlogo from "../images/patlogo.PNG";
import schoollogo from "../images/schoollogo.PNG";
import higherlogo from "../images/higherlogo.PNG";
import higher from "../images/higher.PNG";
import school from "../images/school.PNG";
import patent from "../images/patent.PNG";
import judicial from "../images/judicial.PNG";
import newspaper from "../images/newspaper.PNG";
import cultural from "../images/cultural.PNG";


function Body() {

  const cardData = [
    { img: carrier, logo: clip, data: "CARRIER DEVELOPMENT", product: ["Examinations", "Resources Types"] },
    { img: research, logo: reslogo, data: "RESEARCH", product: ["Subjects","Content Providers", "Resources Types","Journals"] },
    { img: cultural, logo: cullogo, data: "CULTURAL ARCHIVES", product: ["Content Providers", "Resources Types"] },
    { img: newspaper, logo: newslogo, data: "NEWSPAPER ARCHIVES", product: ["Content Providers", "Newspapers"] },
    { img: judicial, logo: judlogo, data: "JUDICIAL RESOURCES", product: ["Content Providers", "Resources Types","Case Types","Jurisdiction"] },
    { img: patent, logo: patlogo, data: "PATENTS AND STANDARDS", product: ["CPC Classification", "Jurisdiction","Resources Types","Issuing Authority"] },
    { img: school, logo: schoollogo, data: "SCHOOL EDUCATION", product: ["Subjects", "Educational Levels","Resources Types","Content Providers"] },
    { img: higher, logo: higherlogo, data: "HIGHER EDUCATION", product: ["Subjects","Resources Types","Content Providers", "Educational Levels"] },
  ]

  return (
    <>
    <Banner/>
   
    <div className='flex flex-wrap justify-center py-4 px-5'>
      {
        cardData.map((value, key) => (
          <div className='h-[450px] w-[280px] mx-1 mt-5  rounded-2xl shadow-2xl  shadow-[#8e8c8c]' key={key}>
            <div className=' absolute h-[180px] w-[280px] rounded-t-2xl ' style={{ backgroundImage: `url(${value.img})` }}>
              <div className='flex justify-center items-center pt-[80px] text-[#fdfbfa] font-bold text-xl'>{value.data}</div>
            </div>
            <div className='absolute flex flex-col h-[230px] w-[280px]'>
              <div className='flex flex-col pt-[250px] ml-2'>
              {
                value.product.map((newValue, newKey) => (
                  <li className='flex items-center pb-2' key={newKey}>
                    <FaCaretRight className="mr-2" /> {newValue}
                  </li>
                ))
              }
              </div>
            </div>

            <div className=' flex justify-center mb-24 items-center relative pt-36'><img className='rounded-full  shadow-2xl  h-[80px] w-[80px]' src={value.logo} alt="" /></div>
            <div className=' flex h-[50px] mt-44 justify-center items-center text-green-500 rounded-b-2xl font-semibold w-[280px] bg-slate-100'><HiMiniSquare3Stack3D />Explore more Contents</div>
          </div>
        ))}

    </div>
    <Footer/>
    </>
  )
}

export default Body

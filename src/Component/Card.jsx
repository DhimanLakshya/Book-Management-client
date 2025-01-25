import React from 'react';
import wing from '../images/pngwing.com.png'
import { RxCross2 } from "react-icons/rx";
import cc from "../images/cc.PNG";
import comedy from "../images/comedy.PNG";
import adventure from "../images/adventure.PNG";
import rom from "../images/rom.PNG";
import mys from "../images/mys.PNG";
import fiction from "../images/fiction.PNG";
import fantasy from "../images/fantesy.PNG";
import historical from "../images/historical.PNG";
import biblography from "../images/biblography.PNG";

export default function Card() {

    const Carousel = () => {
        const contentRef = React.useRef(null);
      
        const scrollLeft = () => {
          contentRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        };
      
        const scrollRight = () => {
          contentRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        };
      
        return (
          <div className="carousel-container">
            {/* Left Arrow */}
            <div className="arrow left-arrow" onClick={scrollLeft}>
              <img src="/path-to-left-arrow.png" alt="Left Arrow" />
            </div>
      
            {/* Content Section */}
            <div className="carousel-content" ref={contentRef}>
              <div className="card">Historical</div>
              <div className="card">Fantasy</div>
              <div className="card">Horror</div>
              <div className="card">Adventure</div>
              <div className="card">Science Fiction</div>
              <div className="card">Romance</div>
              <div className="card">Comedy</div>
              <div className="card">Mystery/ Thriller</div>
              <div className="card">Biography / Autobiography</div>
            </div>
      
            {/* Right Arrow */}
            <div className="arrow right-arrow" onClick={scrollRight}>
              <img src="/path-to-right-arrow.png" alt="Right Arrow" />
            </div>
          </div>
        );
      };
      

    const carddata = [
         { img: historical, data: "Historical" },
            { img: fantasy, data: "Fantasy" },
            { img: cc, data: "Horror" },
            { img: adventure, data: "Adventure" },
            { img: fiction, data: "Science Fiction" },
            { img: rom, data: "Romance" },
            { img: comedy, data: "Comedy" },
            { img: mys, data: "Mystery/ Thriller" },
            { img: biblography, data: "Biography / Autobiography" },
    ];

    return (

        <div className='flex' >
            <div className='flex   ml-[10px] mt-[170px]'>
                <div className='bg-cover pt-2 bg-center h-[300px] w-[180px]  bg-orange-700 rounded-l-full shadow-xl' style={{ backgroundImage: `url(${wing})` }}>
                    <h1 className=' pt-20 pl-3  font-bold text-[27px]  text-white '>CHOOSE YOUR PREFERENCE</h1>

                </div>

                <div className='bg-gray-100 h-[300px] w-[1300px] rounded-r-full '>
                    <div className='flex w-full pr-36  justify-end pt-2 font-bold'>
                        <a href="/Body"><RxCross2 /></a>
                    </div>
                   <div className='flex flex-wrap'>
                   {
                        carddata.map((value, key) => (
                            <div className='flex flex-col mt-3  h-[200px] w-[130px] ml-[10px] rounded-lg justify-between  'key={key} >
                                <div className='rounded-t-lg '>
                                    <img className=' bg-white rounded-full border-2 h-[160px] w-[160px] hover:border-red-700 hover:scale-110 duration-300' src={value.img} alt="" />
                                </div>
                                <div className='mt-1 mb-3'>
                                    <div className='flex justify-center text-center items-center w-full h-[80px]'>
                                    <div>{value.data}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                   </div>

                </div>


            </div>
        </div>
    )
}


import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from './Banner';
import Footer from './Footer';

// Image imports

import cc from "../images/cc.PNG";
import comedy from "../images/comedy.PNG";
import adventure from "../images/adventure.PNG";
import rom from "../images/rom.PNG";
import mys from "../images/mys.PNG";
import fiction from "../images/fiction.PNG";
import fantasy from "../images/fantesy.PNG";
import historical from "../images/historical.PNG";
import biblography from "../images/biblography.PNG";

function Body() {

  const cardData = [
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 500,
  };

  return (
    <>
      <Banner />
      <div className="rounded-full h-[430px] w-full">
        <Slider {...settings}>
          {cardData.map((value, key) =>
          (
            <div className='flex pt-4' key={key}>
              <div className=' relative p-2 pb-2  bg-center rounded-full h-[380px] w-[290px] border-4 border-white ring-4 ring-red-800 ' style={{ backgroundImage: `url(${value.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}  >
                <div className=' absolute text-center flex h-full w-full justify-center items-center text-white text-4xl font-bold'>{value.data}</div>
              </div>
            </div>
          ))
          }
        </Slider>
      </div>
      <Footer />
    </>



  );
}

export default Body;




import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop the slides
    speed: 500, // Animation speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    arrows: true, // Show navigation arrows
  };

  return (
    <div style={{ margin: '50px' }}>
      <Slider {...settings}>
        <div className="card">Newspaper Archives</div>
        <div className="card">Judicial Resources</div>
        <div className="card">Patents & Standards</div>
        <div className="card">School Education</div>
        <div className="card">Higher Education</div>
        <div className="card">Research</div>
      </Slider>
    </div>
  );
};

export default Carousel;

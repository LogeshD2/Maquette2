// AppInterface.js
import React from 'react';
import Slider from 'react-slick';
import './AppInterface.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Phone1 from '../../assets/appinterface/Phone1.png';
import Phone2 from '../../assets/appinterface/Phone2.png';
import Phone3 from '../../assets/appinterface/Phone3.png';
import Phone4 from '../../assets/appinterface/Phone4.png';
import Phone5 from '../../assets/appinterface/Phone5.png';

import ArrowLeft from '../../assets/appinterface/ArrowLeft.png';
import ArrowRight from '../../assets/appinterface/ArrowRight.png';
import Phone from '../../assets/appinterface/Phone.png';
import GooglePlay from '../../assets/herosection/GooglePlay.png';
import AppStore from '../../assets/herosection/AppStore.png';
import { FaDownload, FaThumbsUp, FaStar } from 'react-icons/fa';

export default function AppInterface() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Affiche trois images à la fois
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    nextArrow: (
      <div className="slick-arrow slick-next">
        <img src={ArrowRight} alt="Next" />
      </div>
    ),
    prevArrow: (
      <div className="slick-arrow slick-prev">
        <img src={ArrowLeft} alt="Previous" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  const images = [Phone1, Phone2, Phone3, Phone4, Phone5];

  return (
    <div className="app-interface-container">
      <div className="flex flex-col items-center justify-center mt-[60px] md:mt-[120px]">
        <h4 className="text-h5 text-black text-center md:text-h4 md:font-bold w-[287px] h-[75px] md:w-[360px] md:h-[95px] lg:w-[625px] lg:h-[48px]">
          CHECKOUT OUR APP INTERFACE LOOK
        </h4>

        <div className="text-center mx-auto mt-[18px] w-[300px] h-[70px] md:w-[450px] lg:w-[601px] lg:mt-[23px]">
          <p className="text-h7 text-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.
          </p>
          <p className="text-h7 text-gray hidden md:inline">
            Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus,
          </p>
          <p className="text-h7 text-gray hidden lg:inline">
            ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>

        <div className="carousel-wrapper mt-[40px] md:mt-[60px]">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mx-auto mt-[60px] mb-[60px] w-full max-w-[338px] md:flex-row md:max-w-[687px] lg:max-w-[1166px] md:mt-[120px] md:mb-[120px]">
        <div className="flex flex-col items-center justify-center space-y-[60px] md:flex-row md:space-x-[30px] md:space-y-0 lg:space-x-[80px]">
          <div className="text-center md:text-left">
            <h4 className="text-h5 md:text-h4 md:font-semibold">DOWNLOAD APP NOW</h4>
            <p className="text-h7 text-gray max-w-[329px] mt-[18px] lg:max-w-[570px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.
              Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
              Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
            <div className="flex mt-[40px] space-x-4">
              <img src={GooglePlay} alt="Google Play" className="w-[109.64px] h-[32.68px] md:w-[149px] md:h-[47px]" />
              <img src={AppStore} alt="App Store" className="w-[108.19px] h-[34.13px] md:w-[151px] md:h-[45px]" />
            </div>

            <div className="flex mt-[60px] text-center space-x-[18px] md:mt-[40px] lg:mt-[59px] lg:space-x-[30px]">
              <div className="flex flex-col justify-center items-center text-white space-y-[8px] bg-royalBlue rounded p-4 w-[96px] h-[100px] lg:w-[170px] lg:h-[176px]">
                <FaDownload className="mx-auto w-[18px] h-[18px] lg:w-[35px] lg:h-[35px]" />
                <p className="text-h6 lg:text-h4">59865</p>
                <p className="text-h7 lg:text-h5">Download</p>
              </div>

              <div className="flex flex-col justify-center items-center text-white space-y-[8px] bg-royalBlue rounded p-4 w-[96px] h-[100px] lg:w-[170px] lg:h-[176px]">
                <FaThumbsUp className="mx-auto w-[18px] h-[18px] lg:w-[35px] lg:h-[35px]" />
                <p className="text-h6 lg:text-h4">29852</p>
                <p className="text-h7 lg:text-h5">Like</p>
              </div>

              <div className="flex flex-col justify-center items-center text-white space-y-[8px] bg-royalBlue rounded p-4 w-[96px] h-[100px] lg:w-[170px] lg:h-[176px]">
                <FaStar className="mx-auto w-[18px] h-[18px] lg:w-[35px] lg:h-[35px]" />
                <p className="text-h6 lg:text-h4">1500</p>
                <p className="text-h7 lg:text-h5">5 star rating</p>
              </div>
            </div>
          </div>

          <div>
            <img src={Phone} alt="Phone" />
          </div>
        </div>
      </div>
    </div>
  );
}

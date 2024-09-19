// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import './Carousel.css'; // Importation du fichier CSS
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Profile from '../../assets/ourcustomers/Profile1.png';

const Carousel = () => {
  const settings = {
    dots: true, // Affiche les dots en bas
    centerMode: true,
    centerPadding: '20%',
    slidesToShow: 1,
    slidesToScroll: 1, // Ajouté pour assurer le défilement
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '15%',
          slidesToScroll: 1, // Assurez-vous de l'ajouter ici aussi
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '10%',
          slidesToScroll: 1, // Assurez-vous de l'ajouter ici aussi
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '5%',
          slidesToScroll: 1, // Assurez-vous de l'ajouter ici aussi
        }
      }
    ]
  };

  const slidesData = [
    {
      name: "Ann Lubin",
      role: "Co-Founder",
      image: Profile,
    },
    {
      name: "John Doe",
      role: "CTO",
      image: Profile,
    },
    {
      name: "Jane Smith",
      role: "CEO",
      image: Profile,
    },
    {
      name: "Mike Johnson",
      role: "Designer",
      image: Profile,
    },
  ];

  return (
    <section className="bg-customBackground bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center mt-[120px]">
        <h4 className="text-h5 text-white text-center w-[287px] mt-[60px] lg:mt-[120px] md:text-h4 md:font-bold md:w-[360px] lg:w-[625px] lg:h-[48px]">
          OUR CREATIVE TEAM
        </h4>
        <div className="text-center mx-auto mt-[40px] w-[300px] h-[70px] md:w-[450px] lg:w-[601px] md:mt-[18px] lg:mt-[23px]">
          <p className="text-h7 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.
          </p>
          <p className="text-h7 text-white hidden md:inline">
            Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus,
          </p>
          <p className="text-h7 text-white hidden lg:inline">
            ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
      </div>

      <div className="carousel-container mt-8">
        <Slider {...settings}>
          {slidesData.map((slide, index) => (
            <div key={index} className="carousel-slide">
              <div
                className="bg-white text-black rounded-lg p-8 shadow-2xl mx-auto slide-content"
                style={{ width: '770px', height: '357px' }}
              >
                <div className="flex justify-center">
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-center">{slide.name}</h3>
                <p className="text-sm font-light text-gray-600 text-center">{slide.role}</p>
                <p className="mt-4 text-sm text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae,
                  nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor,
                  ac nunc libero urna, feugiat.
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;

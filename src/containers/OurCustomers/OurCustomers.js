import React, { useState, useEffect } from "react";
import Profile from "../../assets/ourcustomers/Profile1.png"

export default function OurCustomers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play logic (for cycling every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % 3); // 3 is the number of testimonials
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Manual navigation with dots
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Calculate previous and next index to create the cycling effect
  const prevIndex = (currentIndex - 1 + 3) % 3; // Handles cycling back to last testimonial
  const nextIndex = (currentIndex + 1) % 3; // Handles cycling forward to first testimonial

  return (
    <section className="bg-customBackground bg-cover bg-center bg-no-repeat-100">
      <div className="flex flex-col items-center mt-[120px]">

            <h4 className="text-h5 text-white text-center w-[287px] h-[75px] mt-[60px] lg:mt-[120px] md:text-h4 md:font-bold md:w-[360px] md:h-[95px] lg:w-[625px] lg:h-[48px]">
                OUR REATIVE TEAM
            </h4>

            <div className="text-center mx-auto mt-[40px] w-[300px] h-[70px] md:w-[450px] lg:w-[601px] md:mt-[18px] lg:mt-[23px]">
                <p className="text-h7 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. 
                </p>
                <p className="text-h7 text-white hidden md:inline">
                    Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, 
                </p>
                <p className="text-h7 text-white hidden lg:inline">
                    ullamcorper velit.
                    Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                </p>
            </div>

        </div>

      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center overflow-hidden mt-[32px] md:mt-[40px] lg:mt-[60px]">
        <div className="flex items-center justify-center relative w-full">
          
          <div
            className={`relative w-1/3 opacity-50 transform scale-90 transition-transform duration-500 ease-in-out -translate-x-8`}
          >
            {prevIndex === 0 && (
              <div className="bg-white text-black rounded-lg p-6 shadow-lg">
                <div className="flex justify-center">
                  <img
                    src={Profile}
                    alt="Ann Lubin"
                    className="w-16 h-16 rounded-full mb-4"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center">Ann Lubin</h3>
                <p className="text-sm font-light text-gray-600 text-center">Co-Founder</p>
              </div>
            )}
            {prevIndex === 1 && (
              <div className="bg-white text-black rounded-lg p-6 shadow-lg">
                <div className="flex justify-center">
                  <img
                    src={Profile}
                    alt="John Doe"
                    className="w-16 h-16 rounded-full mb-4"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center">John Doe</h3>
                <p className="text-sm font-light text-gray-600 text-center">CEO</p>
              </div>
            )}
            {prevIndex === 2 && (
              <div className="bg-white text-black rounded-lg p-6 shadow-lg">
                <div className="flex justify-center">
                  <img
                    src={Profile}
                    alt="Jane Smith"
                    className="w-16 h-16 rounded-full mb-4"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center">Jane Smith</h3>
                <p className="text-sm font-light text-gray-600 text-center">CTO</p>
                
              </div>
            )}
          </div>

          <div className="relative w-1/2 transform scale-100 transition-transform duration-500 ease-in-out z-10 shadow-2xl">
            {currentIndex === 0 && (
              <div className="bg-white text-black rounded-lg p-8 shadow-2xl">
                <div className="flex justify-center">
                  <img
                    src={Profile}
                    alt="Ann Lubin"
                    className="w-24 h-24 rounded-full mb-4"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-center">Ann Lubin</h3>
                <p className="text-sm font-light text-gray-600 text-center">Co-Founder</p>
                <p className="mt-4 text-sm text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, 
                    nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, 
                    ac nunc libero urna, feugiat.                
                </p>
              </div>
            )}

            {currentIndex === 1 && (
              <div className="bg-white text-black rounded-lg p-8 shadow-2xl">
                <div className="flex justify-center">
                  <img
                    src={Profile}
                    alt="John Doe"
                    className="w-24 h-24 rounded-full mb-4"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-center">John Doe</h3>
                <p className="text-sm font-light text-gray-600 text-center">CEO</p>
                <p className="mt-4 text-sm text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, 
                    nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, 
                    ac nunc libero urna, feugiat.                
                </p>
              </div>
            )}

            {currentIndex === 2 && (
              <div className="bg-white text-black rounded-lg p-8 shadow-2xl">
                <div className="flex justify-center">
                  <img
                    src={Profile}
                    alt="Jane Smith"
                    className="w-24 h-24 rounded-full mb-4"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-center">Jane Smith</h3>
                <p className="text-sm font-light text-gray-600 text-center">CTO</p>
                <p className="mt-4 text-sm text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, 
                    nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, 
                    ac nunc libero urna, feugiat.                
                </p>
              </div>
            )}
          </div>

          {/* Next testimonial - half hidden */}
          <div
            className={`relative w-1/3 opacity-50 transform scale-90 transition-transform duration-500 ease-in-out translate-x-8`}
          >
            {nextIndex === 0 && (
              <div className="bg-white text-black rounded-lg p-6 shadow-lg">
                <div className="flex justify-center">
                  <img
                    src={Profile}
                    alt="Ann Lubin"
                    className="w-16 h-16 rounded-full mb-4"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center">Ann Lubin</h3>
                <p className="text-sm font-light text-gray-600 text-center">Co-Founder</p>
              </div>
            )}
            {nextIndex === 1 && (
              <div className="bg-white text-black rounded-lg p-6 shadow-lg">
                <div className="flex justify-center">
                  <img
                    src={Profile}
                    alt="John Doe"
                    className="w-16 h-16 rounded-full mb-4"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center">John Doe</h3>
                <p className="text-sm font-light text-gray-600 text-center">CEO</p>
              </div>
            )}
            {nextIndex === 2 && (
              <div className="bg-white text-black rounded-lg p-6 shadow-lg">
                <div className="flex justify-center">
                  <img
                    src={Profile}
                    alt="Jane Smith"
                    className="w-16 h-16 rounded-full mb-4"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center">Jane Smith</h3>
                <p className="text-sm font-light text-gray-600 text-center">CTO</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-6 space-x-[18px] mt-[40px] pb-[60px] md:pb-[120px] md:mt-[60px]">
        <span
          className={`w-3 h-3 rounded-full cursor-pointer ${
            currentIndex === 0 ? "bg-white" : "bg-gray"
          }`}
          onClick={() => handleDotClick(0)} 
        ></span>
        <span
          className={`w-3 h-3 rounded-full cursor-pointer ${
            currentIndex === 1 ? "bg-white" : "bg-gray"
          }`}
          onClick={() => handleDotClick(1)}
        ></span>
        <span
          className={`w-3 h-3 rounded-full cursor-pointer ${
            currentIndex === 2 ? "bg-white" : "bg-gray"
          }`}
          onClick={() => handleDotClick(2)}
        ></span>
      </div>
    </section>
  );
}

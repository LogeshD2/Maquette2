import React from "react";
import App from "../../assets/herosection/Phone.png";
import Browser from "../../assets/icons/Browser.png"
import CellPhone from "../../assets/icons/CellPhone.png"
import Comment from "../../assets/icons/Comment.png"
import EyeScanner from "../../assets/icons/EyeScanner.png"
import MaleTelemarketer from "../../assets/icons/MaleTelemarketer.png"
import Vector from "../../assets/icons/Vector.png"


export default function AppFeatures() {


  return (

    <div className="flex flex-col items-center justify-center bg-customBackground bg-customBackground bg-cover bg-center bg-no-repeat">

      <div className="mt-[60px] md:mt-[120px]">
        <h4 className="text-h5 text-white text-center md:text-h4 md:font-bold">APP FEATURES</h4>

        <div className="text-center mx-auto mt-[18px] px-[38px] md:px-[159px] lg:px-[419px]">
            <p className="text-h7 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. 
            </p>
            <p className="text-h7 text-white hidden lg:inline">
                Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>
        </div>  
      </div>


      <div className="flex flex-col justify-center items-center relative mt-[32px] mb-[60px] md:mb-[120px] md:mt-[60px] md:flex-row">
        
        <div className="w-[214px] relative flex flex-col items-center md:block lg:w-[375px]">

            <div className="order-1 text-center mt-[32px] md:mt-0">
              <img src={Comment} alt="Comment" className="mx-auto invert"/>
              <div className="text-white">
                <h3 className="text-h6 font-semibold mt-[30px] mb-[18px] lg:mt-[22px] lg:text-h5">FULL FREE CHAT</h3>
                <p className="text-h7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            <img 
              src={App} alt="App"
              className="w-[214px] h-[468px] order-4 block my-[60px] md:mx-[18px] lg:mx-[60px] lg:w-[375px] lg:h-[812px]"
            />

            <div className="order-7 text-center mt-[59px] md:mt-0">
              <img src={MaleTelemarketer} alt="Comment" className="mx-auto invert"/>
              <div className="text-white">
                <h3 className="text-h6 font-semibold mt-[30px] mb-[18px] lg:mt-[22px] lg:text-h5">24/7 support by real pepole</h3>
                <p className="text-h7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>


            <div className="order-5 md:absolute top-[30%] right-0 transform mt-[50px] md:mt-0 md:translate-x-full md:-translate-y-1/2 text-center md:text-left">
                <img src={CellPhone} alt="Comment" className="mx-auto md:mr-auto md:ml-0 invert"/>
                <div className="text-white">
                  <h3 className="text-h6 font-semibold mt-[30px] mb-[18px] lg:mt-[22px] lg:text-h5">ISO & ANDROID VERSION</h3>
                  <p className="text-h7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div className="order-6 md:absolute bottom-[40%] right-0 transform mt-[50px] md:mt-0 md:translate-x-full md:translate-y-1/2 text-center md:text-left">
                <img src={EyeScanner} alt="Comment" className="mx-auto md:mr-auto md:ml-0 invert"/>
                <div className="text-white">
                  <h3 className="text-h6 font-semibold mt-[30px] mb-[18px] lg:mt-[22px] lg:text-h5 ">RETINA READY GRAPHICS</h3>
                  <p className="text-h7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div className="order-2 md:absolute top-[30%] left-0 transform mt-[40px] md:mt-0 md:-translate-x-full md:-translate-y-1/2 text-center md:text-right">
                <img src={Browser} alt="Comment" className="mx-auto md:ml-auto md:mr-0 invert"/>
                <div className="text-white">
                  <h3 className="text-h6 font-semibold mt-[30px] mb-[18px] lg:mt-[22px] lg:text-h5 ">UNLIMITER FEATURES</h3>
                  <p className="text-h7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div className="order-3 md:absolute bottom-[40%] left-0 transform mt-[40px] md:mt-0 md:-translate-x-full md:translate-y-1/2 text-center md:text-right">
                <img src={Vector} alt="Comment" className="mx-auto md:ml-auto md:mr-0 invert"/>
                <div className="text-white">
                  <h3 className="text-h6 font-semibold mt-[30px] mb-[18px] lg:mt-[22px] lg:text-h5">AWSOME UI DESIGN</h3>
                  <p className="text-h7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

        </div>
        
      </div>

     </div>
  )
}
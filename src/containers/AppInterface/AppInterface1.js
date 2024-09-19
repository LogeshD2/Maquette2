import React from "react";
import Phones from "../../assets/appinterface/Phones.png";
import ArrowLeft from "../../assets/appinterface/ArrowLeft.png";
import ArrowRight from "../../assets/appinterface/ArrowRight.png";
import Phone from "../../assets/appinterface/Phone.png";
import GooglePlay from "../../assets/herosection/GooglePlay.png";
import AppStore from "../../assets/herosection/AppStore.png";
import { FaDownload, FaThumbsUp, FaStar } from 'react-icons/fa';




export default function AppInterface() {

    return (
        <div className="flex flex-col items-center justify-content overflow-x-hidden">

            <div className="flex flex-col items-center justify-content mt-[60px] h-[707px] md:w-[688px] md:h-[767px] lg:w-[1293px] lg:h-[883px] md:mt-[120px]">
                
                <h4 className="text-h5 text-black text-center md:text-h4 md:font-bold w-[287px] h-[75px] md:w-[360px] md:h-[95px] lg:w-[625px] lg:h-[48px]">CHECKOUT OUR APP INTERFACE LOOK</h4>

                <div className="text-center mx-auto mt-[18px] w-[300px] h-[70px] md:w-[450px] lg:w-[601px] lg:mt-[23px]">
                    <p className="text-h7 text-gray">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. 
                    </p>
                    <p className="text-h7 text-gray hidden md:inline">
                        Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, 
                    </p>
                    <p className="text-h7 text-gray hidden lg:inline">
                        ullamcorper velit.
                        Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                    </p>
                </div>


                <div className="flex items-center justify-center mt-[40px] md:mt-[60px]">

                    <div className="rounded-full text-royalBlue border-2 border-royalBlue-500 hidden lg:flex">
                        <img src={ArrowLeft} alt="Arrow Left"/>
                    </div>

                    <div className="lg:mx-[30px] w-[688px] h-[444px] lg:w-[1066px] lg:h-[622px]">
                        <img src={Phones} alt="Phones"/>
                    </div>

                    <div className="rounded-full text-royalBlue border-2 border-royalBlue-500 bg-royalBlue hidden lg:flex">
                        <img src={ArrowRight} alt="Arrow Left"/>
                    </div>

                </div>

                <div className="flex justify-center my-8 space-x-[18px] lg:mb-8 mt-[40px] md:mt-[60px] lg:mt-[40px]">
                    <div className="h-[16px] w-[16px] rounded-full bg-royalBlue mx-1"></div>
                    <div className="h-[16px] w-[16px] rounded-full bg-royalBlue mx-1"></div>
                    <div className="h-[16px] w-[16px] rounded-full bg-royalBlue mx-1"></div>
                    <div className="h-[16px] w-[16px] rounded-full bg-royalBlue mx-1"></div>
                    <div className="h-[16px] w-[16px] rounded-full bg-royalBlue mx-1"></div>
                </div>


            </div>


            <div className="flex items-center justify-center mt-[60px] mb-[60px] w-[338px] md:flex-row  md:w-[687px] lg:w-[1166px] md:mt-[120px] md:mb-[120px]">
                <div className="flex flex-col items-center justify-center space-x-[30px] space-y-[60px] md:flex-row lg:space-x-[80px] lg:space-y-0">
                    <div>
                        <h4 className="text-h5 md:text-h4 md:font-semibold">DOWNLOAD APP NOW</h4>
                        <p className="text-h7 text-gray w-[329px] mt-[18px] lg:w-[570px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. 
                            Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. 
                            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                        </p>
                        <div className="flex mt-4 space-x-4 mt-[40px]   ">
                            <img src={GooglePlay} alt="Google Play" className="w-[109.64px] h-[32.68px] md:w-[149px] md:h-[47px]"/>
                            <img src={AppStore} alt="App Store" className="w-[108.19px] h-[34.13px] md:w-[151px] md:h-[45px]"/>
                        </div>


                        <div className="flex mt-[60px] text-center space-x-[18px] md:mt-[40px] lg:mt-[59px] lg:space-x-[30px]">

                            <div className="flex flex-col justify-center items-center text-white space-y-[8px] bg-royalBlue rounded p-4 w-[96px] h-[100px] lg:w-[170px] lg:h-[176px]"> 
                                <FaDownload className="mx-auto w-[18px] h-[18px] lg:w-[35px] lg:h-[35px]"/>
                                <p className="text-h6 lg:text-h4">59865</p>
                                <p className="text-h7 lg:text-h5">Download</p>
                            </div>

                            <div className="flex flex-col justify-center items-center text-white space-y-[8px] bg-royalBlue rounded p-4 w-[96px] h-[100px] lg:w-[170px] lg:h-[176px]"> 
                                <FaThumbsUp className="mx-auto w-[18px] h-[18px] lg:w-[35px] lg:h-[35px]"/>
                                <p className="text-h6 lg:text-h4">29852</p>
                                <p className="text-h7 lg:text-h5">Like</p>
                            </div>

                            <div className="flex flex-col justify-center items-center text-white space-y-[8px] bg-royalBlue rounded p-4 w-[96px] h-[100px] lg:w-[170px] lg:h-[176px]"> 
                                <FaStar className="mx-auto w-[18px] h-[18px] lg:w-[35px] lg:h-[35px]"/>
                                <p className="text-h6 lg:text-h4">1500</p>
                                <p className="text-h7 lg:text-h5">5 star rating</p>
                            </div>
                        </div>

                    </div>

                   

                    <div>
                        <img src={Phone} alt="Phone"></img>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
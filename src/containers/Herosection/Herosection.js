import React from "react";
import Header from "../../components/Header/Header";
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Phone from "../../assets/herosection/Phone.png";
import GooglePlay from "../../assets/herosection/GooglePlay.png";
import AppStore from "../../assets/herosection/AppStore.png";


export default function Herosection() {

    return (

        <div className="bg-customBackground bg-cover bg-center bg-no-repeat px-[16px] md:px-[40px] lg:px-[135px] py-[35px]">
            <div className="hidden md:flex md:items-center md:justify-between md:mb-4 lg:flex lg:items-center lg:justify-between lg:mb-4">
                <div className="flex items-center space-x-20">
                    <div className="flex items-center space-x-4 justify-center ">
                        <p className="text-white"><FaEnvelope/></p>
                        <p className="text-white text-h7">Info@youremail.com</p>
                    </div>
                    <div className="flex items-center space-x-4 ">
                        <p className="text-white"><FaPhone/></p>
                        <p className="text-white text-h7">(480) 555-0103</p>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <p className="text-white"><FaFacebookF/></p>
                    <p className="text-white"><FaInstagram/></p>
                    <p className="text-white"><FaTwitter/></p>
                    <p className="text-white"><FaYoutube/></p>
                </div>

            </div>

            <div>
                <Header/>
            </div>

                <div className="flex flex-col items-center justify-between mt-20 md:flex-row">
                        <div className="bg-white px-4 py-2 w-[323px] h-[318px] md:w-[356px] md:h-[318px] lg:w-[570px] lg:h-[432px] lg:p-6">
                            <h2 className="text-h5 text-royalBlue md:text-h4 md:font-semibold lg:text-h2">A Great App Makes Your Life Better</h2>
                            <p className="text-h7 text-gray mt-2 lg:mt-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat 
                                duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                            <div className="mt-4 lg:mt-10">
                                <p className="text-h6 text-black lg:text-h5 ">Download App Now</p>
                                <div className="flex mt-4 space-x-4">
                                    <img src={GooglePlay} alt="Google Play" className="w-[109.64px] h-[32.68px] md:w-[149px] md:h-[47px]"/>
                                    <img src={AppStore} alt="App Store" className="w-[108.19px] h-[34.13px] md:w-[151px] md:h-[45px]"/>
                                </div>
                            </div>
                            
                    </div>


                    <div>
                        <img src={Phone} className="pl-55 w-[466px] h-[521px] md:w-[378px] md:h-[423px] lg:w-[646px] lg:h-[725px]"></img>
                    </div>
                </div>

        </div>
    )
}
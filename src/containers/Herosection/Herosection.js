import React from "react";
import Header from "../../components/Header/Header";
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Phone from "../../assets/herosection/Phone.png";
import GooglePlay from "../../assets/herosection/GooglePlay.png";
import AppStore from "../../assets/herosection/AppStore.png";


export default function Herosection() {

    return (

        <div className="bg-customBackground bg-cover bg-center bg-no-repeat px-4 lg:px-20 py-6">
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

                <div className="flex flex-col items-center justify-around mt-20 lg:flex-row">
                        <div className="bg-white w-[570px] h-[432px] p-6    ">
                            <h2 className="text-h2 text-royalBlue font-semibold">A Great App Makes Your Life Better</h2>
                            <p className="text-h7 text-gray mt-4">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat 
                                duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                            <div className="mt-10">
                                <p className="text-h5 text-black">Download App Now</p>
                                <div className="flex mt-4 space-x-4">
                                    <img src={GooglePlay} alt="Google Play"/>
                                    <img src={AppStore} alt="App Store"/>
                                </div>
                            </div>
                            
                    </div>


                    <div>
                        <img src={Phone}></img>
                    </div>
                </div>

        </div>
    )
}
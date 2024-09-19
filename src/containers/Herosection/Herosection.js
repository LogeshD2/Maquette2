import React from "react";
import Header from "../../components/Header/Header";
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Phone from "../../assets/herosection/Phone.png";
import GooglePlay from "../../assets/herosection/GooglePlay.png";
import AppStore from "../../assets/herosection/AppStore.png";


export default function Herosection() {

    return (
        <Header>

            <div className="flex flex-col items-center justify-between mt-20 md:flex-row">
                <div className="border-[16px] w-[323px] h-[318px] p-6 md:w-[356px] md:h-[318px] lg:w-[570px] lg:h-[432px]" style={{ borderColor: '#7572FF' }}>
                    <div className="bg-white px-4 py-2 w-[323px] h-[318px] md:w-[356px] md:h-[318px] lg:w-[570px] lg:h-[432px] lg:p-6">
                        <h2 className="sm:text-h5 text-royalBlue md:text-h4 md:font-semibold lg:text-h2">A Great App Makes Your Life Better</h2>
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

                </div>
                


                <div className="mr-[-124px]">
                    <img src={Phone} className="pl-55 w-[466px] h-[521px] md:w-[378px] md:h-[423px] lg:w-[646px] lg:h-[725px]"></img>
                </div>
            </div>

        </Header>
        

               
    )
}
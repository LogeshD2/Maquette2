import React from "react";
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaHome} from 'react-icons/fa';
import Navbar from "../NavBar/Navbar";


export default function Header(props) {

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
                    <Navbar/>
                </div>

                <div>{props.children}</div>

        </div>
    )
}
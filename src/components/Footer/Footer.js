import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPaperPlane, FaCopyright } from 'react-icons/fa';


export default function Footer() {
    return (
        <div className="bg-black px-4 pt-20 pb-10 lg:px-20 ">
            <div className="container mx-auto bg-black grid grid-cols-1 gap-20 lg:grid-cols-3 lg:gap-0">
                <div className="flex-1 justify-center items-center">
                    <p className="text-h4 text-white font-semibold">LOGO</p>
                    <p className="text-h7 text-white max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.</p>
                    <div className="flex items-center space-x-6 mt-10">
                        <p className="text-white"><FaFacebookF/></p>
                        <p className="text-white">|</p>
                        <p className="text-white"><FaInstagram/></p>
                        <p className="text-white">|</p>
                        <p className="text-white"><FaTwitter/></p>
                        <p className="text-white">|</p>
                        <p className="text-white"><FaYoutube/></p>
                    </div>
                </div>

                <div className="flex-1 justify-center items-center space-y-4">
                    <p className="text-h4 text-white font-semibold">QUICK LINK</p>
                    <div className="flex flex-col items-start space-y-4">
                        <p className="text-white">About</p>
                        <p className="text-white">Features</p>
                        <p className="text-white">Screenshot</p>
                        <p className="text-white">Blog</p>
                    </div>
                </div>

                <div className="flex-1 justify-center items-center space-y-6">
                    <p className="text-h4 text-white font-semibold">NEWS LETTER</p>
                    <p className="text-h7 text-white max-w-sm">Subscribe our newsletter to get our latest update & news</p>
                    <div className="flex">
                        <input 
                            type="email"
                            placeholder="Your email address"
                            className="bg-white rounded p-2 w-full"
                        />
                        <button className="bg-royalBlue p-2 rounded-r text-white">
                            <FaPaperPlane/>
                        </button>
                    </div>
                </div>

            </div>
            <div className="mt-20">
                <hr className="border-t-2 border-white mb-4"></hr>
                <p className="text-white text-center"><FaCopyright className="inline"/> Copyright 2021 .Ojjomedia. All Right Reserved.</p>
            </div>
        </div>
        
    )
}
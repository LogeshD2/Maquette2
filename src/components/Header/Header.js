import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo/Logo.png";


export default function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    useEffect(() => {
        if(menuOpen) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }
    }) 

    return (
        <header className="flex justify-between items-center bg-white rounded p-2">

            <div className="flex justify-between items-center w-full lg:hidden">
                <button onClick={toggleMenu} className="text-neutral-grey focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <img src={Logo} alt="Appoly Logo"/>
                <button className="bg-royalBlue text-white rounded px-4 py-2">Download</button>
            </div>

          

            {menuOpen && (
                <div className="fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 z-20 lg:hidden">
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-black focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    <nav>
                        <ul className="flex flex-col items-center justify-start space-y-6">
                        <li className="text-h6 text-black">
                            <p>Home</p>
                        </li>
                        <li className="text-h6 text-black">
                            <p>Service</p>
                        </li>
                        <li className="text-h6 text-black">
                            <p>Feature</p>
                        </li>
                        <li className="text-h6 text-black">
                            <p>Product</p>
                        </li>
                        <li className="text-h6 text-black">
                            <p>Testimonial</p>
                        </li>
                        <li className="text-h6 text-black">
                            <p>FAQ</p>
                        </li>
                        </ul>
                    </nav>
                
                </div>
            )}

            <nav className="w-full hidden lg:flex lg:items-center lg:justify-between ">
                <ul className="flex items-center justify-between w-full pl-20">
                    <li>
                        <p className="text-royalBlue text-h6 font-semibold underline">Home</p>
                    </li>
                    <li>
                        <p className="text-black text-h6 font-semibold">About</p>
                    </li>
                    <li>
                        <p className="text-black text-h6 font-semibold">Features</p>
                    </li>
                    <li className="flex">
                        <img src={Logo} alt="Appoly Logo"/>
                    </li>
                    <li>
                        <p className="text-black text-h6 font-semibold">Screenshot</p>
                    </li>
                    <li>
                        <p className="text-black text-h6 font-semibold">Blog</p>
                    </li>
                    <li>
                        <button className="bg-royalBlue text-white rounded px-4 py-2">Download</button>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}
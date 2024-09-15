import React from "react";
import Image1 from "../../assets/ourblog/Image1.png";
import Image2 from "../../assets/ourblog/Image2.png";
import Image3 from "../../assets/ourblog/Image3.png";
import { FaEnvelope, FaPhone } from 'react-icons/fa';



export default function OurBlog() {
    return (
        <div className="flex flex-col items-center justify-center px-[16px] md:px-[40px] lg:px-[135px] relative">

            <div className="flex flex-col">

                <h4 className="text-h5 text-black text-center w-[287px] h-[75px] mt-[60px] lg:mt-[120px] md:text-h4 md:font-bold md:w-[360px] md:h-[95px] lg:w-[625px] lg:h-[48px]">
                    OUR RECENT
                </h4>

                <div className="text-center mx-auto mt-[40px] w-[300px] h-[70px] md:w-[450px] lg:w-[601px] md:mt-[18px] lg:mt-[23px]">
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

            </div>


            <div className="flex flex-col space-y-[30px] mt-[40px] mb-[60px] md:space-x-[24px] md:space-y-0 md:flex-row md:mb-[120px] lg:space-x-[30px] lg:space-y-0 lg:mt-[60px]">

                <div className="flex flex-col w-[343px] h-[484px] md:w-[213px] md:h-[633px] lg:w-[370px] lg:h-[500px] rounded shadow">
                    <img src={Image1} alt="Image1 1" className="w-full h-[228px]"/>
                    <div className="px-[18px]">
                        <h4 className="text-h6 font-semibold mt-[30px] self-start md:font-normal lg:font-semibold lg:mt-[40px]">THE SNAP PIXEL: HOW IT WORKS AND HOW TO INSTALL </h4>
                        <p className="text-h7 text-gray mt-[14px] self-start md:mt-[18px] lg:mt-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                        <p className="text-royalBlue text-h6 underline self-start mt-[10px]">READ MORE</p> 
                    </div>                   
                </div>

                <div className="flex flex-col w-[343px] h-[484px] md:w-[213px] md:h-[633px] lg:w-[370px] lg:h-[500px] rounded shadow">
                    <img src={Image2} alt="Image1 2" className="w-full h-[228px]"/>
                    <div className="px-[18px]">
                        <h4 className="text-h6 font-semibold mt-[30px] self-start md:font-normal lg:font-semibold lg:mt-[40px]">GLOBAL PARTNER SOLUTION: A PARTNERSHIP OF INNOVATION</h4>
                        <p className="text-h7 text-gray mt-[14px] self-start md:mt-[18px] lg:mt-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                        <p className="text-royalBlue text-h6 underline self-start mt-[10px]">READ MORE</p>            
                    </div>        
                </div>

                <div className="flex flex-col w-[343px] h-[484px] md:w-[213px] md:h-[633px] lg:w-[370px] lg:h-[500px] rounded shadow">
                    <img src={Image3} alt="Image1 3" className="w-full h-[228px]"/>
                    <div className="px-[18px]">
                        <h4 className="text-h6 font-semibold mt-[30px] self-start md:font-normal lg:font-semibold lg:mt-[40px]">2021 AN OPPORTUNITY FORSNA PCHATTERS TO START FRESH</h4>
                        <p className="text-h7 text-gray mt-[14px] self-start md:mt-[18px] lg:mt-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                        <p className="text-royalBlue text-h6 underline self-start mt-[10px]">READ MORE</p>
                    </div>
        
                </div>


            </div>

            <div className="absolute top-[80%] md:top-[70%] lg:top-[90%] w-full flex justify-center mb-[1000px]">
                <div className="flex items-center justify-around w-[343px] h-[310px] bg-white rounded shadow md:w-[658px] md:h-[150px] lg:w-[1170px] lg:h-[230px]">
                    <div className="flex items-center space-x-4">
                        <div className="bg-royalBlue p-3 rounded-full">
                            <FaEnvelope className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] md:w-[40px] md:h-[40px] text-white"/>
                        </div>
                        <p className="text-h6">info@youremail.com</p>
                    </div>
                    <p>|</p>
                    <div className="flex items-center space-x-4">
                        <div className="bg-royalBlue p-3 rounded-full">
                            <FaPhone className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] md:w-[40px] md:h-[40px] text-white"/>
                        </div>
                        <p className="text-h6">+880 321 655 9985</p>
                    </div>
                </div>
            </div>

            
            
        </div>
    )
}
import React from "react";
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaHome} from 'react-icons/fa';
import Header from "../../components/Header/Header";
import Image1 from "../../assets/bloglight/Image1.png";
import Image2 from "../../assets/bloglight/Image2.png";
import Image3 from "../../assets/bloglight/Image3.png";
import Image4 from "../../assets/bloglight/Image4.png";
import Image5 from "../../assets/bloglight/Image5.png";
import RecentPost from "../../components/RecentPost/RecentPost";



export default function BlogLight() {

    return (
        <div>

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

                <div className="flex flex-col items-center justify-center space-y-[18px]">
                    <h2 className="text-h2 font-bold text-white mt-[75px]">BLOG</h2>
                    <p className="flex items-center space-x-[10px] text-white">
                        <FaHome className="w-[18px] h-[18px]"/>
                        <p className="text-h7">Home/Blog</p>
                    </p>
                </div>
            </div>

            <div className="flex space-x-[30px] px-[134px] mt-[120px]">

                {/* gauche */}
                <div className="flex flex-col space-y-[60px] mb-[60px]">

                    <div className="w-[770px]">
                        <img src={Image1} alt="Image1"/>
                        <h3 className="text-h3 mt-[50px]">THE SNAP PIXEL: HOW IS IT WORK</h3>
                        <p className="text-h7 text-gray mt-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie blandit nibh risus nisl, 
                            scelerisque. Fusce cursus massa ut egestas. Massa lorem turpis lectus viverra. 
                            Nulla volutpat urna eget velit vel at gravida fermentum, sem.Ut ullamcorper scelerisque 
                            interdum bibendum non tristique nullam. Netus nisl, leo nunc eu tincidunt vivamus nisi suspendisse. 
                            Non morbi eleifend sit ac.
                        </p>
                        <p className="text-royalBlue text-h6 underline self-start mt-[40px]">READ MORE</p> 
                    </div>

                    <div className="w-[770px]">
                        <img src={Image2} alt="Image2"/>
                        <h3 className="text-h3 mt-[50px]">HAVE BRANDS GIVEN UP ON INTERNATIONAL WOMEN’S DAY?</h3>
                        <p className="text-h7 text-gray mt-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie blandit nibh risus nisl, 
                            scelerisque. Fusce cursus massa ut egestas. Massa lorem turpis lectus viverra. 
                            Nulla volutpat urna eget velit vel at gravida fermentum, sem.Ut ullamcorper scelerisque 
                            interdum bibendum non tristique nullam. Netus nisl, leo nunc eu tincidunt vivamus nisi suspendisse. 
                            Non morbi eleifend sit ac.
                        </p>
                        <p className="text-royalBlue text-h6 underline self-start mt-[40px]">READ MORE</p> 
                    </div>

                    <div className="w-[770px]">
                        <img src={Image3} alt="Image3"/>
                        <h3 className="text-h3 mt-[50px]">6 DESIGNERS ON THE BRANDS EMPOWERING WOMEN TODAY</h3>
                        <p className="text-h7 text-gray mt-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie blandit nibh risus nisl, 
                            scelerisque. Fusce cursus massa ut egestas. Massa lorem turpis lectus viverra. 
                            Nulla volutpat urna eget velit vel at gravida fermentum, sem.Ut ullamcorper scelerisque 
                            interdum bibendum non tristique nullam. Netus nisl, leo nunc eu tincidunt vivamus nisi suspendisse. 
                            Non morbi eleifend sit ac.
                        </p>
                        <p className="text-royalBlue text-h6 underline self-start mt-[40px]">READ MORE</p> 
                    </div>

                    <div className="w-[770px]">
                        <img src={Image4} alt="Image4"/>
                        <h3 className="text-h3 mt-[50px]">GILLETTE LAUNCHES PLANET KIND, A SLIGHTLY MORE SUSTAINABLE LINE OF PERSONAL CARE.</h3>
                        <p className="text-h7 text-gray mt-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie blandit nibh risus nisl, 
                            scelerisque. Fusce cursus massa ut egestas. Massa lorem turpis lectus viverra. 
                            Nulla volutpat urna eget velit vel at gravida fermentum, sem.Ut ullamcorper scelerisque 
                            interdum bibendum non tristique nullam. Netus nisl, leo nunc eu tincidunt vivamus nisi suspendisse. 
                            Non morbi eleifend sit ac.
                        </p>
                        <p className="text-royalBlue text-h6 underline self-start mt-[40px]">READ MORE</p> 
                    </div>  

                    <div className="w-[770px]">
                        <img src={Image5} alt="Image5"/>
                        <h3 className="text-h3 mt-[50px]">THE SNAP PIXEL: HOW IT WORKS AND HOW TO INSTALL </h3>
                        <p className="text-h7 text-gray mt-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie blandit nibh risus nisl, 
                            scelerisque. Fusce cursus massa ut egestas. Massa lorem turpis lectus viverra. 
                            Nulla volutpat urna eget velit vel at gravida fermentum, sem.Ut ullamcorper scelerisque 
                            interdum bibendum non tristique nullam. Netus nisl, leo nunc eu tincidunt vivamus nisi suspendisse. 
                            Non morbi eleifend sit ac.
                        </p>
                        <p className="text-royalBlue text-h6 underline self-start mt-[40px]">READ MORE</p> 
                    </div>

                    <hr></hr>

                    <div className="flex items-center justify-center space-x-[30px] font-bold text-gray">
                        <p className="text-royalBlue">1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                    </div>

                </div>


                {/* droite */}
                <div>

                    <RecentPost/>

                </div>

                    
            </div>


            
        </div>
       
    )
}
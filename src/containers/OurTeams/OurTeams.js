import React from "react";
import Profile1 from "../../assets/ourteams/Profile1.png";
import Profile2 from "../../assets/ourteams/Profile2.png";
import Profile3 from "../../assets/ourteams/Profile3.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';




export default function OurTeams() {

    return (
        <div className="flex flex-col items-center justify-center px-[16px] md:px-[40px] lg:px-[135px]">

            <div className="flex flex-col items-center mt-[120px]">

                <h4 className="text-h5 text-black text-center w-[287px] h-[75px] mt-[60px] lg:mt-[120px] md:text-h4 md:font-bold md:w-[360px] md:h-[95px] lg:w-[625px] lg:h-[48px]">
                    OUR REATIVE TEAM
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


            <div className="flex flex-col space-y-[30px] mt-[40px] mb-[60px] md:space-x-[24px] md:space-y-0 lg:space-x-[30px] lg:space-y-0 md:flex-row md:mb-[120px] md:mt-[32px] lg:mt-[60px]">

            <div className="flex flex-col items-center justify-center w-[343px] h-[580px] md:w-[213px] md:h-[453px] lg:w-[343px] lg:h-[580px] rounded shadow">
            <img src={Profile1} alt="Profile 1" className="w-[198px] h-[198px] md:w-[178px] md:h-[178px]"/>
                    <h4 className="text-h4 font-semibold mt-[77px] md:text-h6 md:font-normal md:mt-[11px] lg:text-h4 lg:font-semibold lg:mt-[77px]">CARLA PRESS</h4>
                    <h6 className="text-h6 text-gray md:text-h7 lg:text-h6">APP DEVELOPER</h6>
                    <p className="text-h7 text-gray text-center mt-[14px] md:mt-[18px] lg:mt-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                    <div className="flex items-center space-x-[31px] mt-[30px] md:mt-[30px] md:space-x-[14px] lg:mt-[40px] lg:space-x-[31px]">
                        <p className="text-royalBlue"><FaFacebookF/></p>
                        <p>|</p>
                        <p className="text-black"><FaInstagram/></p>
                        <p>|</p>
                        <p className="text-black"><FaTwitter/></p>
                        <p>|</p>
                        <p className="text-black"><FaYoutube/></p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center w-[343px] h-[580px] md:w-[213px] md:h-[453px] lg:w-[343px] lg:h-[580px] rounded shadow">
                    <img src={Profile2} alt="Profile 2" className="w-[198px] h-[198px] md:w-[178px] md:h-[178px]"/>
                    <h4 className="text-h4 font-semibold mt-[77px] md:text-h6 md:font-normal md:mt-[11px] lg:text-h4 lg:font-semibold lg:mt-[77px]">GRAIG FOUSE</h4>
                    <h6 className="text-h6 text-gray md:text-h7 lg:text-h6">UI/UX DESIGNER</h6>
                    <p className="text-h7 text-gray text-center mt-[14px] md:mt-[18px] lg:mt-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                    <div className="flex items-center space-x-[31px] mt-[30px] md:mt-[30px] md:space-x-[14px] lg:mt-[40px] lg:space-x-[31px]">
                        <p className="text-black"><FaFacebookF/></p>
                        <p>|</p>
                        <p className="text-black"><FaInstagram/></p>
                        <p>|</p>
                        <p className="text-black"><FaTwitter/></p>
                        <p>|</p>
                        <p className="text-black"><FaYoutube/></p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center w-[343px] h-[580px] md:w-[213px] md:h-[453px] lg:w-[343px] lg:h-[580px] rounded shadow">
                    <img src={Profile3} alt="Profile 3" className="w-[198px] h-[198px] md:w-[178px] md:h-[178px]"/>
                    <h4 className="text-h4 font-semibold mt-[77px] md:text-h6 md:font-normal md:mt-[11px] lg:text-h4 lg:font-semibold lg:mt-[77px]">JOCELYN SEPTIMUS</h4>
                    <h6 className="text-h6 text-gray md:text-h7 lg:text-h6">WEBSITE DEVELOPER</h6>
                    <p className="text-h7 text-gray text-center mt-[14px] md:mt-[18px] lg:mt-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                    <div className="flex items-center space-x-[31px] mt-[30px] md:mt-[30px] md:space-x-[14px] lg:mt-[40px] lg:space-x-[31px]">
                        <p className="text-black"><FaFacebookF/></p>
                        <p>|</p>
                        <p className="text-black"><FaInstagram/></p>
                        <p>|</p>
                        <p className="text-black"><FaTwitter/></p>
                        <p>|</p>
                        <p className="text-black"><FaYoutube/></p>
                    </div>
                </div>


            </div>

            
            
        </div>
    )
}
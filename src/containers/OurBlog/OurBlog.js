import React from "react";
import Image1 from "../../assets/ourblog/Image1.png";
import Image2 from "../../assets/ourblog/Image2.png";
import Image3 from "../../assets/ourblog/Image3.png";


export default function OurBlog() {
    return (
        <div className="flex flex-col items-center justify-center px-[16px] md:px-[40px] lg:px-[135px] relative">

            <div className="flex flex-col items-center mt-[120px] lg:h-[477px] md:h-[402px]">

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


            <div className="flex flex-col space-y-[30px] mb-[60px] md:space-x-[24px] md:space-y-0 lg:space-x-[30px] lg:space-y-0 md:flex-row md:mb-[120px]">

                <div className="flex flex-col items-center justify-center w-[343px] h-[580px] md:w-[213px] md:h-[453px] lg:w-[343px] lg:h-[580px] rounded shadow">
                    <img src={Image1} alt="Profile 1" className="w-[198px] h-[198px] md:w-[178px] md:h-[178px]"/>
                    <h4 className="text-h4 font-semibold mt-[77px] md:text-h6 md:font-normal md:mt-[11px] lg:text-h4 lg:font-semibold lg:mt-[77px]">CARLA PRESS</h4>
                    <h6 className="text-h6 text-gray md:text-h7 lg:text-h6">APP DEVELOPER</h6>
                    <p className="text-h7 text-gray text-center mt-[14px] md:mt-[18px] lg:mt-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                    
                </div>

                <div className="flex flex-col items-center justify-center w-[343px] h-[580px] md:w-[213px] md:h-[453px] lg:w-[343px] lg:h-[580px] rounded shadow">
                    <img src={Image2} alt="Profile 2" className="w-[198px] h-[198px] md:w-[178px] md:h-[178px]"/>
                    <h4 className="text-h4 font-semibold mt-[77px] md:text-h6 md:font-normal md:mt-[11px] lg:text-h4 lg:font-semibold lg:mt-[77px]">GRAIG FOUSE</h4>
                    <h6 className="text-h6 text-gray md:text-h7 lg:text-h6">UI/UX DESIGNER</h6>
                    <p className="text-h7 text-gray text-center mt-[14px] md:mt-[18px] lg:mt-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                   
                </div>

                <div className="flex flex-col items-center justify-center w-[343px] h-[580px] md:w-[213px] md:h-[453px] lg:w-[343px] lg:h-[580px] rounded shadow">
                    <img src={Image3} alt="Profile 3" className="w-[198px] h-[198px] md:w-[178px] md:h-[178px]"/>
                    <h4 className="text-h4 font-semibold mt-[77px] md:text-h6 md:font-normal md:mt-[11px] lg:text-h4 lg:font-semibold lg:mt-[77px]">JOCELYN SEPTIMUS</h4>
                    <h6 className="text-h6 text-gray md:text-h7 lg:text-h6">WEBSITE DEVELOPER</h6>
                    <p className="text-h7 text-gray text-center mt-[14px] md:mt-[18px] lg:mt-[14px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.</p>
                    
                </div>


            </div>

            <div className="absolute top-[80%] md:top-[70%] lg:top-[90%] w-full flex justify-center">
                <img src={Image2} alt="Video" className="w-[343px] h-[150px] md:w-[570px] md:h-[231px] lg:w-[770px] lg:h-[319px]"/>
            </div>

            
            
        </div>
    )
}
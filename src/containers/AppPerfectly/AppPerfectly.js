import React from "react";
import Video from "../../assets/appperfectly/Video.png";

export default function AppPerfectly() {

    return (

        <div className="flex flex-col items-center justify-center relative">

            <div className="flex flex-col items-center bg-customBackground bg-cover bg-center bg-no-repeat w-full relative h-[357px] lg:h-[477px] md:h-[402px]">

                <h4 className="text-h5 text-white text-center w-[287px] h-[75px] mt-[60px] lg:mt-[120px] md:text-h4 md:font-bold md:w-[360px] md:h-[95px] lg:w-[625px] lg:h-[48px]">HOW TO USE THE APP PERFECTLY</h4>

                <div className="text-center mx-auto mt-[40px] w-[300px] h-[70px] md:w-[450px] lg:w-[601px] md:mt-[18px] lg:mt-[23px]">
                    <p className="text-h7 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. 
                    </p>
                    <p className="text-h7 text-white hidden md:inline">
                        Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, 
                    </p>
                    <p className="text-h7 text-white hidden lg:inline">
                        ullamcorper velit.
                        Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                    </p>
                </div>

            </div>

            <div className="absolute top-[67%] w-full flex justify-center">
                <img src={Video} alt="Video" className="w-[343px] h-[150px] md:w-[570px] md:h-[231px] lg:w-[770px] lg:h-[319px]"/>
            </div>



        </div>
        
       
    )

}
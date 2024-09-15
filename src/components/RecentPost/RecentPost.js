import React from "react";
import { FaSearch} from 'react-icons/fa';

import Image1 from "../../assets/recentpost/Image1.png";
import Image2 from "../../assets/recentpost/Image2.png";
import Image3 from "../../assets/recentpost/Image3.png";
import Image4 from "../../assets/recentpost/Image4.png";
import Image5 from "../../assets/recentpost/Image5.png";


export default function RecentPost() {

    return (
        <div className="w-[371px]">

            <div className="flex items-center justify-start space-x-[18px] w-[370px] h-[60px] border border-gray pl-[18px] rounded">
                <FaSearch className="text-gray"/>
                <p className="text-h7 text-gray">Search for...</p>
            </div>

            <hr className="mt-[40px] text-gray"></hr>

            <div className="flex flex-col mt-[40px]">
                <h4 className="text-h4 font-bold">RECENT POST</h4>

                <div className="flex flex-col space-y-[40px] mt-[13px]">

                    <div>
                        <img src={Image1} alt="Image 1"/>
                        <p className="text-h6 font-semibold">
                            IRINA ROZOVSKY CAPTURES BROOKLYN’S PROSPECT PARK IN A ROMANTIC LIGHT
                        </p>
                    </div>

                    <div>
                        <img src={Image2} alt="Image 2"/>
                        <p className="text-h6 font-semibold">
                            A NEW ONLINE SHOW IS TRACING LEADING ARTISTS’ EARLY COMMERCIAL PRACTICE                        
                        </p>
                    </div>

                    <div>
                        <img src={Image3} alt="Image 3"/>
                        <p className="text-h6 font-semibold">
                            THINK FOOD BANK PROJECT USES STICKERS TO PROMPT PEOPLE TO CONTRIBUTE
                        </p>
                    </div>

                    <div>
                        <img src={Image4} alt="Image 4"/>
                        <p className="text-h6 font-semibold">
                            A NEW PHOTO BOOK IS CELEBRA TING LA’S VIBRANT LOWRIDER CULTURE
                        </p>
                    </div>

                    <div>
                        <img src={Image5} alt="Image 5"/>
                        <p className="text-h6 font-semibold">
                            THE INDIE PUBLISHERS ADAPTING TO THE PANDEMIC
                        </p>
                    </div>
                </div>
            </div>

            <hr className="mt-[40px] text-gray"></hr>


            <div className="flex flex-col mt-[40px]">
                <h4 className="text-h4 font-bold">CATEGORY</h4>
                    <ul class="space-y-[18px] mt-[13px] text-gray">
                        <li class="flex items-center">
                            <div class="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-black"></div>
                            <span class="ml-2">E-COMMARS APP</span>
                        </li>
                        <li class="flex items-center">
                            <div class="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-black"></div>
                            <span class="ml-2">BANKING APP</span>
                        </li>
                        <li class="flex items-center">
                            <div class="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-black"></div>
                            <span class="ml-2">BUSINESS APP</span>
                        </li>
                        <li class="flex items-center">
                            <div class="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-black"></div>
                            <span class="ml-2">VIDEO APP</span>
                        </li>
                        <li class="flex items-center">
                            <div class="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-black"></div>
                            <span class="ml-2">E-COMMARS APP</span>
                        </li>
                    </ul>

            </div>


            <hr className="mt-[40px] text-gray"></hr>


            <div className="mt-[40px]">
                <h4 className="text-h4 font-bold">TAGS</h4>
                <div className="grid grid-cols-2 gap-x-[30px] gap-y-[18px] mt-[13px]">
                    <span class="underline">ECOMMERS APP</span>
                    <span class="underline">MUSIC APP</span>
                    <span class="underline">BANK APP</span>
                    <span class="underline">SOCIAL APP</span>
                </div>

            </div>


        </div>

    )
}
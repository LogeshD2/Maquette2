import React from "react";
import { FaCheck } from 'react-icons/fa';
import Phones from "../../assets/ourapp/Phones.png";


export default function OurApp() {
    
    return (
        <div className="mt-20">
            <h4 className="text-h4 text-black text-center font-semibold">ABOUT OUR APP</h4>

            <p className="text-h7 text-gray text-center w-[601px] mx-auto mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. 
                Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. 
                Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </p>

            <div className="flex items-center justify-around mt-6">
                <div>
                    <img src={Phones} alt="Phones"/>
                </div>

                <div>

                    <div className="items-center w-[570px] h-[160px] rounded shadow-lg p-10">

                        <div className="flex space-x-4">
                            <div className="inline-block w-6 h-6 bg-royalBlue rounded-full flex items-center justify-center p-1">
                                <FaCheck className="text-white"/>
                            </div>
                            
                            <div>  
                                <h6 class="text-h6 text-black">Creative design</h6>
                                <p className="text-h7 text-gray"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. 
                                    Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                                </p>
                            </div>

                        </div>
                    
                    </div>
                    
                    <div className="items-center w-[570px] h-[160px] rounded shadow-lg p-10">

                        <div className="flex space-x-4">
                            <div className="inline-block w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center p-1">
                                <FaCheck className="text-white"/>
                            </div>
                            
                            <div>  
                                <h6 class="text-h6 text-black">Creative design</h6>
                                <p className="text-h7 text-gray"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. 
                                    Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                                </p>
                            </div>

                        </div>
                    
                    </div>

                    <div className="items-center w-[570px] h-[160px] rounded shadow-lg p-10">

                        <div className="flex space-x-4">
                            <div className="inline-block w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center p-1">
                                <FaCheck className="text-white"/>
                            </div>
                            
                            <div>  
                                <h6 class="text-h6 text-black">Creative design</h6>
                                <p className="text-h7 text-gray"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. 
                                    Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                                </p>
                            </div>

                        </div>
                    
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
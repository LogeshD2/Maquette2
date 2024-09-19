import React from "react";
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaHome, FaClock, FaUser, FaComment, FaHeart} from 'react-icons/fa';
import Header from "../../components/Header/Header";
import Image1 from "../../assets/blogdetails/Image1.png";
import Image2 from "../../assets/blogdetails/Image2.png";
import Image3 from "../../assets/blogdetails/Image3.png";
import Video from "../../assets/blogdetails/Video.png";
import Profile from "../../assets/blogdetails/Profile.png";
import Profile1 from "../../assets/blogdetails/Profile1.png";
import Profile2 from "../../assets/blogdetails/Profile2.png";
import Profile3 from "../../assets/blogdetails/Profile3.png";
import RecentPost from "../../components/RecentPost/RecentPost";
import Footer from "../../components/Footer/Footer";



export default function BlogDetails() {
    
    return (
        <div>
            <Header>
                <div className="flex flex-col items-center justify-center space-y-[18px]">
                    <h2 className="text-h2 text-center font-bold text-white mt-[75px] w-[783px] ">The Snap Pixel: How It Works and How to Install</h2>
                    <p className="flex items-center space-x-[10px] text-white">
                        <FaHome className="w-[18px] h-[18px]"/>
                        <p className="text-h7">Home/Blog/Blog details</p>
                    </p>
                </div>
            </Header>

                

            <div className="flex space-x-[30px] px-[134px] mt-[120px]">


                {/* gauche */}
                <div className="w-[770px]">

                    <img src={Image1} alt="Image 1"/>

                    <div className="flex space-x-[31px] text-gray">
                        <div className="flex items-center space-x-[18px]">
                            <FaClock/>
                            <p>JANUARY 25, 2021</p>
                        </div>

                        <div className="flex items-center space-x-[18px]">
                            <FaUser/>
                            <p>CHARLIE HERWITZ</p>
                        </div>

                        <div className="flex items-center space-x-[18px]">
                            <FaComment/>
                            <p>50 COMMENT</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-col space-y-[20px] text-h7 text-gray mt-[53px]">
                        <p>
                            <span className="text-h2 text-royalBlue font-bold">T</span>he Memphis Design movement is one of unlikeliest success stories in the history of             design. 
                            Like so many artistic reactions, it began as an outlet for its creators, 
                            a way to rail against and confound elite sensibilities. The result was a style that was 
                            revolutionary in its time and whose spirit is a continual source of inspiration to this day.
                        </p>

                        <p>
                            As popular and influential as Memphis Design has been over the years, it can sometimes get a bad rap. 
                            It is a loud, colorful style that is hard to separate from its era. And when implemented without care, 
                            it can make some design projects feel antiquated. On the other hand, a good designer can turn these 
                            sins into virtues: obnoxious retro becoming lively nostalgia.
                        </p>

                        <p>
                            Memphis Design is a 1980s design aesthetic characterized by scattered, brightly colored 
                            shapes and lines. It typically combines circles and triangles with black-and-white graphic 
                            patterns such as polka dots and squiggly lines.
                        </p>
                    </div>

                    <img src={Video} alt="Video" className="mt-[60px]"/>

                    <div className="bg-royalBlue rounded w-[770px] h-[218px] px-[22px] py-[40px] mt-[60px]">
                        <p className="text-h7 text-center text-white font-semibold">Imagine you’re at a party, and you’re bored. You’ve been bored for a while—years, it feels like. 
                            You wonder how a party, something that is supposed to be fun, can feel like it’s draining the life out 
                            of your very soul. As you look around the yawning faces of the guests, you realize it’s going to take 
                            drastic measures to salvage any excitement out of this long night. So you sneak a desperate gulp of 
                            your drink, slip on your tinted sunglasses and leap atop of the sofa. You’ve sacrificed yourself to 
                            karaoke.
                        </p>
                    </div>

                    <div className="flex space-x-[30px] mt-[58px]">

                        <div className="w-[370px] space-y-[42px]">
                            <img src={Image2} alt="Image 2"/>
                            <p className="text-h7 text-gray">
                                The birth of Memphis Design was a lot like this, starting with a 
                                gathering of architects and industrial designers in Milan, Italy in 1981. But it wasn’t the 
                                party that bored the guests. It was the general state of design—how creativity had stagnated to 
                                become corporate and uniform.
                            </p>
                        </div>

                        <div className="w-[370px] space-y-[42px]">
                            <img src={Image3} alt="Image 3"/>
                            <p className="text-h7 text-gray">
                                Long before all this, there had been a number of fine art and design movements 
                                that precipitated Memphis Design, and these were likely on the guests’ minds as they traced 
                                where it all had gone wrong. Kadinsky composition On White
                                Kadinsky’s work also likely inspired the Memphis design movement.
                            </p>
                        </div>

                    </div>

                    <div className="flex space-x-[18px] w-[770px] h-[195px] shadow rounded mt-[120px] p-[18px]">
                        <div className="flex flex-col items-center">
                            <img src={Profile} alt="Profile"/>
                            <div className="flex items-center space-x-[40px] mt-[18px]">
                                <p><FaFacebookF/></p>
                                <div className="flex space-x-[12px]">
                                    <p><FaTwitter/></p>
                                    <p><FaYoutube/></p>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h6 className="text-h6 font-semibold">CHARLIE HERWITZ</h6>
                            <p className="text-h7 text-royalBlue mt-[7px]">UI Designer</p>
                            <p className="text-h7 text-gray mt-7px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Tempor porttitor est amet, volutpat augue a sodales nec, vitae. 
                                Pulvinar vitae eu sed elit vitae.
                            </p>
                        </div>
                    </div>


                    <div className="mt-[121px]">

                        <div className="flex items-center space-x-[170px] text-h5">
                            <p >3 COMMENTS</p>
                            <p>DISQUS</p>
                            <div >
                                <div className="flex items-center space-x-[10px]">
                                    <FaComment className="text-royalBlue"/>
                                    <p>GWEN</p>
                                </div>
                            </div>
                        </div>
                    
                        <hr/>

                        <div className="flex items-center text-h6 text-gray space-x-[411px]">
                            <div className="flex items-center space-x-[10px]">
                                <FaHeart className="text-royalBlue"/>
                                <p>RECOMMEND</p>
                            </div>

                            <div className="flex items-center space-x-[18px]">
                                <p>SORT BY</p>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>  
                                </div>
                            </div>
                        </div>

                        <div className="mt-[35px] border border-gray-500 rounded h-[80px]"></div>

                        <div className="flex space-x-[20px] mt-[40px] mb-[120px]">
                            <img src={Profile1} className="w-[80px] h-[80px]"/>

                            <div>
                                <div>
                                    <h5 className="text-h5 text-royalBlue">RUBEN VETROVS</h5>
                                    <p className="text-h7 text-gray mt-[10px]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper accumsan 
                                        malesuada sed feugiat. Rhoncus vel ultrices metus ut sed. Sit nunc, in nibh nisi, 
                                        viverra quis sociis malesuada.
                                    </p>
                                    <div className="flex items-center space-x-[10px] mt-[8px] text-gray">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                        <p>|</p>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 15l7-7 7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                <div>

                                
                                    <div className="flex space-x-[20px] mt-[40px]">
                                        <img src={Profile2} className="w-[50px] h-[50px]"/>
                                        <div>
                                            <h5 className="text-h6 text-royalBlue">RUBEN VETROVS</h5>
                                            <p className="text-h7 text-gray mt-[10px]">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper accumsan 
                                                malesuada sed feugiat. Rhoncus vel ultrices metus ut sed. Sit nunc, in nibh nisi, 
                                                viverra quis sociis malesuada.
                                            </p>
                                            <div className="flex items-center space-x-[10px] mt-[8px] text-gray">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                                <p>|</p>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 15l7-7 7 7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="flex space-x-[20px] mt-[40px]">
                                        <img src={Profile3} className="w-[50px] h-[50px]"/>
                                        <div>
                                            <h5 className="text-h6 text-royalBlue">RUBEN VETROVS</h5>
                                            <p className="text-h7 text-gray mt-[10px]">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper accumsan 
                                                malesuada sed feugiat. Rhoncus vel ultrices metus ut sed. Sit nunc, in nibh nisi, 
                                                viverra quis sociis malesuada.
                                            </p>
                                            <div className="flex items-center space-x-[10px] mt-[8px] text-gray">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                                <p>|</p>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 15l7-7 7 7"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>

                            </div>

                        </div>

                    </div>


                </div>


                <div>
                    <RecentPost/>
                </div>

            </div>

            <div>
                <Footer />
            </div>
            

        </div>
    )
}
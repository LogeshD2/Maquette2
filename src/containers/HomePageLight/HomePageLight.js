import React from "react";
import Herosection from "../Herosection/Herosection";
import Footer from "../../components/Footer/Footer";
import OurApp from "../OurApp/OurApp";
import AppFeatures from "../AppFeatures/AppFeatures";
import AppInterface from "../AppInterface/AppInterface";
import AppPerfectly from "../AppPerfectly/AppPerfectly";
import OurTeams from "../OurTeams/OurTeams";
import OurCustomers from "../OurCustomers/OurCustomers";
import OurBlog from "../OurBlog/OurBlog";


export default function HomePageLight() {
    return (
        <div className="flex flex-col min-h-screen">
            
            <main className="flex-grow">
                <Herosection/>
                <OurApp/>
                <AppFeatures/>
                <AppInterface/>
                <AppPerfectly/> 
                <OurTeams/>
                <OurCustomers/>
                <OurBlog/>
                <div className="pt-[220px] md:pt-[235px] bg-black">
                    <Footer />
                </div>
            </main>

        </div>
    )
} 
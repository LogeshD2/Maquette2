import React from "react";
import Herosection from "./Herosection/Herosection";
import Footer from "../components/Footer/Footer";
import OurApp from "./OurApp/OurApp";
import AppFeatures from "./AppFeatures/AppFeatures";
import AppInterface from "./AppInterface/AppInterface";
import AppPerfectly from "./AppPerfectly/AppPerfectly";
import OurTeams from "./OurTeams/OurTeams";
import OurCustomers from "./OurCustomers/OurCustomers";
import OurBlog from "./OurBlog/OurBlog";


export default function Maquette2() {
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
            </main>
        

            <footer className="flex-shrink-0">
                <Footer />
            </footer>

        </div>
    )
} 
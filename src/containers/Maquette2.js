import React from "react";
import Herosection from "./Herosection/Herosection";
import Footer from "../components/Footer/Footer";
import OurApp from "./OurApp/OurApp";
import AppFeatures from "./AppFeatures/AppFeatures";


export default function Maquette2() {
    return (
        <div className="flex flex-col min-h-screen">
            
            <main className="flex-grow">
                <Herosection/>
                <OurApp/>
                <AppFeatures/>
            </main>
        

            <footer className="flex-shrink-0">
                <Footer />
            </footer>

        </div>
    )
} 
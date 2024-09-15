import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./HOC/Layout/Layout";
import HomePageLight from "./HomePageLight/HomePageLight";
import BlogLight from "./BlogLight/BlogLight";
import BlogDetails from "./BlogDetails/BlogDetails";


export default function Maquette2() {

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePageLight/>}/>
                <Route path="/blog-light" element={<BlogLight/>}/>
                <Route path="/blog-details" element={<BlogDetails/>}/>

            </Routes>
        </Layout>
    )

}
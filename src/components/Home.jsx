import React from "react";
import {Link, Outlet} from "react-router-dom";
import Header from "./home/Header";
import HeroSection from "./home/HeroSection";
import StorySection from "./home/StorySection";
import AlwaysFresh from "./home/AlwaysFresh";
import MenuSection from "./home/MenuSection";
import TastySection from "./home/TastySection";
import BakersDelightSection from "./home/BakersDelightSection";
import Footer from "./home/Footer";
const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <StorySection />
            <AlwaysFresh />
            <MenuSection />
            <TastySection />
            <BakersDelightSection />
            <Footer />  
            <Outlet />         
        </>
    );
}

export default Home;
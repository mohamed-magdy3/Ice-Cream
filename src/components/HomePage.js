import React from "react";

import  About  from './AboutUs';
import MyNavbar  from './Navbar';
import VideoAndPrice  from './VideoAndPrice';
import BestService  from './BestService';
import  Delicious  from './Delicious';
import  Offers  from './Offers';
import  HeadSection  from './HeadSection'
import Clients  from './Clients';
import  Footer  from './Footer';
import  Exp  from './Experience';


function Home() {
    return (
        <div className="home">
            <About />
            <VideoAndPrice />
            <BestService />
            <Delicious />
            <Offers />
            <Exp />
            <Clients />
        </div>

    )


}


export default Home
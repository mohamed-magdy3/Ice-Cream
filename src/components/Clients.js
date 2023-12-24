import React from "react";
// import {
//     MDBCarousel,
//     MDBCarouselItem,
//   } from 'mdb-react-ui-kit';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import ClientsObj from "./ClientsObj";
import ClientFun from "./ClientsData";



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

function Clients() {

    const ClientsData = ClientsObj.map(e => {
        return (
            <ClientFun src={e.src} text={e.text}/>
        )
    })

    return (
        <div className="clients text-center" data-aos="fade-right" data-aos-duration="1000">
            <div className="client-title text-center">
                <p><span style={{ color: 'rgb(255, 82, 168)' }}>Clients  </span> Say About Our Famous Ice Cream </p>
            </div>
            <i class="fa-solid fa-comments"></i>
            <Carousel responsive={responsive} infinite autoPlay className="clients-carsuel">
                {ClientsData}
            </Carousel>
        </div>
    )
}

export default Clients
import React from "react";

import OffersData from "./OffersData";
import OffersCarsObj from './OffersObj';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1254 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 1024, min: 751 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 750, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};




function Offers() {
    const dataOffers = OffersCarsObj.map(e=>{
        return(
            <OffersData src={e.src} price={e.price} titlePrice={e.titlePrice}/>
        )
    })
    return (
        <div className="offers-container " data-aos="zoom-in" data-aos-duration="1000">
            <div>
                <p className="Offer-Price-title"> <span className="best">Best</span> Prices We Offer For Ice Cream Lovers </p>
            </div>
            <div>
            <Carousel responsive={responsive} infinite autoPlay className='multi-offers-container container '>                               
                {dataOffers}
            </Carousel>
            </div>
        </div>
    )
}


export default Offers



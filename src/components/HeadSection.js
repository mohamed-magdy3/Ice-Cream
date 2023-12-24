import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import HeadSectionObj from "./HeadSectionObj";
import HeadData from "./HeadData";


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

export default function HeadSection(){
    const HeadShowVar = HeadSectionObj.map(e=>{
        return(
            <HeadData src={e.src} since={e.since}/>
        )
    })
    return(
        <Carousel  responsive={responsive} infinite autoPlay showIndicators>
            {HeadShowVar}
        </Carousel>
    )
}
import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import ExpObj from "./ExpObj";
import ExpData from "./ExpDesign";




const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 2
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






function Exp() {

    const expData = ExpObj.map(e => {
        return (
            <ExpData src={e.src} name={e.name} />
        )
    })

    return (
        <div className="exp-main-container" data-aos="slide-up" data-aos-duration="1000">
            <div className="exp-title text-center">
                <p> <span style={{color:'rgb(255, 82, 168)'}}>Experienced </span> & Most Famous Ice Cream Chefs </p>
            </div>
            <div>
                <Carousel responsive={responsive} infinite autoPlay   className='exp-carousel '>
                    {expData}
                </Carousel>
            </div>
        </div>
    )
}

export default Exp
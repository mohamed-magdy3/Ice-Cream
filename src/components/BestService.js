 import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BestServiceObj from './BestServiceObj';
import BestData from './BestServiceData';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const bestDataVar = BestServiceObj.map(e=>{
  return(
    <BestData src={e.src} title={e.title}/>
  )
})


const BestService = () => {
  return (
    <div className='BestService'  data-aos="slide-right" data-aos-duration="1000" transition-duration="500">
        <div className='two-lines'></div>
        <div className='best-price-title'>
          <p className=''><span className='best'>Best</span> Services We Provide For Our Clients</p>
        </div>
        
        <Carousel responsive={responsive} infinite autoPlay className='best-service-container'>
          {bestDataVar}
        </Carousel>

    </div>
  )
}

export default BestService
import React from 'react'
import "react-multi-carousel/lib/styles.css";




const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 5
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



function OffersData(props) {
    return (
        <div className='card-container p-3 '>
            <div className='card-container-in container '>
                <div className="price-offer">
                    <p>{props.price}</p>
                    <img src={props.src} position='top' alt='...' className='w-20' />
                </div>
                
                <div className=''>
                    <p className='fw-bold h5 pt-3 vanilla-icecream'>{props.titlePrice}</p>
                    <button className='btn-card'>Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default OffersData
import React from "react";

function BestData(props) {
    return (
        <div className='best-service-card'>
            <img src={props.src} position='top' alt='...' className='w-20' />
            <div className='divBody'>
                <div className='fw-bold h5 pt-4'>{props.title}</div>
                <div className='p-in-best-card'>
                    Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo
                </div>
                <a href="" class="border-bottom border-Info text-decoration-none text-Info link">Learn More</a>
            </div>
        </div>
    )
}

export default BestData
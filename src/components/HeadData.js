import React from "react";


export default function HeadData(props) {
    return (
        <div>
            <img src={props.src} className='carousel-img' />
            <div className='text-in-carousel'>
                <p className='traditional'>TRADITIONAL & DELICIOUS</p>
                <p className='since'>{props.since}</p>
            </div>

        </div>
    )
}
import React from 'react'

const VideoAndPrice = () => {
  return (
    <div className='price-main-container' data-aos="zoom-in" data-aos-duration="500" >
        <div className='price-container'>
        
            <img src={require('../img/promotion.jpg')} className=''/>
      
            

            <div className='right-side-price'>
                <div className='circle'>       
                    <p>$19</p>
                </div>
                <p>Chocolate Ice Cream</p>
                <p>Lorem justo clita dolor ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</p>
              
                    <button className=''>Order Now</button>
               
               
            </div>

        </div>
        
    </div>
  )
}

export default VideoAndPrice
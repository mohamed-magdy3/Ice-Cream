import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselInner,
  MDBCarouselElement,
} from 'mdb-react-ui-kit';





function Carousel() {
  return (

    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='carsul-img'
        itemId={1}
        src={require('../img/carousel.jpg')}
        alt='...'
      >
        <div className='con-carsul'>
          <p className='traditional'>TRADITIONAL & DELICIOUS</p>
          <p className='since'>Traditional Ice Cream Since 1950</p>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='carsul-img'
        itemId={2}
        src={require('../img/a.jpg')}
        alt='...'
      >
        <div className='con-carsul'>
          <p className='traditional'>TRADITIONAL & DELICIOUS</p>
          <p className='since'>Made From Our Own Organic Milk</p>
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='carsul-img'
        itemId={3}
        src={require('../img/carousell.jpg')}
        alt='...'
      >
        <div className='con-carsul'>
          <p className='traditional'>TRADITIONAL & DELICIOUS</p>
          <p className='since'>Made From Our Own Organic Milk</p>
        </div>

      </MDBCarouselItem>
    </MDBCarousel>



  );
}

export default Carousel



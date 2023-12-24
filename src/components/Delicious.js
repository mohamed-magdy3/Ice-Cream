import React from "react";


function Delicious() {
    return(
        <div className="delicious-container pb-5  "    data-aos="zoom-in-up" data-aos-duration="1500" transition-duration="4000" >
            <div className="delicious-title  ">
                <p> <span className="delicious">Delicious</span> Ice Cream Made From Our Very Own <span className="organic"> Organic Milk</span> </p>
            </div>
           
            <div className="portfolio overflow-hidden container">
                <div className="portfolio-item">
                    <img src={require('../img/portfolio-1.jpg')}/> 
                </div>
                <div className="portfolio-item">
                    <img src={require('../img/portfolio-2.jpg')}/>
                </div>
                <div className="portfolio-item">
                    <img src={require('../img/portfolio-3.jpg')}/>              
                </div>
                <div className="portfolio-item">
                    <img src={require('../img/portfolio-4.jpg')}/>               
                </div>
                <div className="portfolio-item">
                    <img src={require('../img/portfolio-5.jpg')}/>                  
                </div>
                <div className="portfolio-item">
                    <img src={require('../img/portfolio-6.jpg')}/>
                </div>
                
             
           
            </div>
           
        </div>
    )
}

export default Delicious
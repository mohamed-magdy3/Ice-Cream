import React from "react";

function About() {
    return (
        <div className="about container-fluid py-5" data-aos="slide-right" data-aos-duration="1000">
            <div className="w-100 m-auto p-3">
                <h2 className="text-center h1 fw-bold "><span style={{ color: 'rgb(255, 82, 168)' }}>Traditional</span> & Delicious Ice Cream Since <span style={{ color: 'rgb(255, 82, 168)' }}>1950</span></h2>
            </div>
            <div className="about-con ">
                <div className="about-us">
                    <p>About Us</p>
                    <p>Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</p>
                    <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</p>
                    <button className="btn-blue">Learn More</button>
                </div>
                <img src={require('../img/about.jpg')} className="about-img" />
                <div className="our-features">
                    <p >Our Features</p>
                    <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                    <p><i class="fa-solid fa-check"></i><span>Eos kasd eos dolor</span></p>
                    <p><i class="fa-solid fa-check"></i><span>Eos kasd eos dolor</span></p>
                    <p><i class="fa-solid fa-check"></i><span>Eos kasd eos dolor</span></p>
                    <button className="btn-pink">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default About
import React from "react";

function Footer() {
    return (
        <div className="footer" data-aos="fade-right" data-aos-duration="1000">
            <p className="logo text-center fw-bold"><span style={{ color: '#62C3E7' }}>i</span>CREAM</p>
            <div className="footer-social pb-5">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
            </div>
            <div class="adress">
                <div class="col left d-block ">
                    <p className="fw-bold h4 pb-3">Get In Touch</p>
                    <div className="pt">
                        <p>123 Street, New York, USA</p>
                        <p className="">+012 345 67890</p>
                    </div>
                </div>
                <div class="col right d-block ">
                    <p className="fw-bold h4 sm-h1 pb-3">Opening Hours</p>
                    <div className="pt">
                        <p>Mon – Sat, 8AM – 5PM</p>
                        <p className="">Sunday: Closed </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
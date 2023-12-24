import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBIcon,
    MDBCollapse
} from 'mdb-react-ui-kit';

import { Routes, Route } from 'react-router-dom';

import { Link, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';




function MyNavbar() {
    const [showNavSecond, setShowNavSecond] = useState(false);
    return (
        <div className=" mynav p-3 bg-dark">
            <div className="contariner-nav ">
                <div className="left-nav">
                    <p>FAQs | </p>
                    <p>&nbsp; Help | </p>
                    <p>&nbsp;Support </p>
                </div>
                <div className="social">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
            </div>

            {/* Secon Navbar */}

            <div className="second-navb">
                <div className="second-navb-contaier">
                    <nav>
                        <ul className="">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/product'>Product</NavLink></li>
                            <li className="ice-cream"><NavLink to='/'><span class="text-i">i</span>CREAM</NavLink></li>
                            <li><NavLink to='/service'>Service</NavLink></li>
                            <li><NavLink to='/Gallery'>Gallery</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>



            </div>
            <MDBNavbar expand='lg' light bgColor='light' className='nav-mobile '>
                <MDBContainer className='m-auto pe-3 ps-3'>
                    <MDBNavbarBrand href='/' className="ice-cream-mob fw-bold"><span class="text-i-mob fw-bold">i</span>CREAM</MDBNavbarBrand>
                    <MDBNavbarToggler
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavSecond(!showNavSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavSecond}>
                        <MDBNavbarNav className='justify-content-center p-2 pt-0'>
                            <MDBNavbarLink active aria-current='page' href='/'>Home</MDBNavbarLink>
                            <MDBNavbarLink href='/about'>About</MDBNavbarLink>
                            <MDBNavbarLink href='/product'>Product</MDBNavbarLink>
                            <MDBNavbarLink href='/service'>Service</MDBNavbarLink>
                            <MDBNavbarLink href='/gallery'>Gallery</MDBNavbarLink>
                            <MDBNavbarLink href='/contact'>Contact</MDBNavbarLink>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    )
}



export default MyNavbar
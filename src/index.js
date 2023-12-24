import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './components/HomePage';
import About from './components/AboutUs';
import CarouselBar from './components/CarouselBar.js';
import MyNavbar from './components/Navbar.js';
import VideoAndPrice from './components/VideoAndPrice';
import BestService from './components/BestService';
import Delicious from './components/Delicious';
import Offers from './components/Offers';
import HeadSection from './components/HeadSection'
import Clients from './components/Clients';
import Footer from './components/Footer';
import Exp from './components/ExpDesign';
import AboutPage from './components/AboutLinkPage'
import Product from './components/ProductLink';
import Service from './components/Service';
import Gallery from './components/Gallery';
import HomePage from './components/HomePage'

import { HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

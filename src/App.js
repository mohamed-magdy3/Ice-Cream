import './App.css';

import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

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

function App() {
  // #F3F6FF
  document.body.style.background = '#F3F6FF'
  return (

    <div className='App'>
      <MyNavbar />
      <HeadSection />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/product' element={<Product />} />
        <Route path='/service' element={<Service />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/service' element={<Service />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;

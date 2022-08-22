
import './App.css';
import './Responsive.css';


import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gym from './components/Gym';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Whatsapp from './components/Whatsapp';

import "../node_modules/slick-carousel/slick/slick.css" 
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "../node_modules/slick-carousel/slick.jquery.json"



function App() {
  return (
 <div className='container'>
 <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/gym' element={<Gym/>} />
    <Route path='/pricing' element={<Pricing/>} />
    <Route path='/contact' element={<Contact/>} />
  </Routes>
  <Footer />
  <Whatsapp />
  </BrowserRouter>
 </div>
  );
}

export default App;

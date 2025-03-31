import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import Homepage from './landing_page/Home/HomePage';
import Signup from './landing_page/Signup/Signpage';
import Aboutpage from './landing_page/About/Aboutpage';
import Productpage from './landing_page/Products/Productpage';
import Pricingpage from './landing_page/Pricing/PricingPage';
import SupportPage from './landing_page/Support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Homepage/>}></Route>
    <Route path='/Signup' element={<Signup/>}></Route>
    <Route path='/About' element={<Aboutpage/>}></Route>
    <Route path='/Products' element={<Productpage/>}></Route>
    <Route path='/Pricing' element={<Pricingpage/>}></Route>
    <Route path='/Support' element={<SupportPage/>}></Route>
  </Routes>
<Footer/>
  </BrowserRouter>
);


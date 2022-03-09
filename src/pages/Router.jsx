import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from './Home';
import About from './About';
import Accommodation from './Accomodation';
import NotFound from './NotFound';

function Router() {
  return (
    <BrowserRouter>
      <div className="wrap-content">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;

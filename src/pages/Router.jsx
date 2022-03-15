import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from './Home/Home';
import About from './About';
import Accommodation from './Accomodation';
import NotFound from './NotFound';

function Router() {
  return (
    <BrowserRouter>
      <div className="wrap-content">
        <div className="container">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/accommodation/:id" element={<Accommodation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;

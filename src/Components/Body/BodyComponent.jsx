import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import PageNotFound from '../Pages/PageNotFound';
import Booking from '../Pages/Booking';
import Team from '../Pages/Team';
import Testomonial from '../Pages/Testomonial';
import AboutUs from '../Pages/AboutUs';
import Contact from '../Pages/Contact';
import Room from '../Pages/Room';
import Service from '../Pages/Service';

const BodyComponent = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testomonial" element={<Testomonial />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/room" element={<Room />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
}

export default BodyComponent;
import './App.css';
import React from "react";
import Hero from './Components/Hero';
import Stats from './Components/Stats';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import OurWork from './Components/OurWork';
import OurServices from './Components/OurServices';
import CallToAction from './Components/CallToAction';
import Testtimonials from './Components/Testtimonials';

function App() {
  return (
    <div className='bg-slate-100'>
      <Navbar />
      <Hero />
      <Stats />
      <OurServices />
      <OurWork />
      <Testtimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
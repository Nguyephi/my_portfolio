import React from 'react';
import NavBar from './components/NavBar'
import Header from './components/Header'
import CheckGithub from './components/CheckGithub'
import ScrollToTop from './components/ScrollToTop'
import FeaturedProjects from './components/FeaturedProjects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <CheckGithub />
      <div id='featured-projects'>
        <FeaturedProjects />
      </div>
      <div id='contact-me'>
        <ContactMe />
      </div>
      <Footer />
      <ScrollToTop />
    </div >
  );
}

export default App;

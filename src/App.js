import React, { useState } from 'react';
import NavBar from './components/NavBar'
import Header from './components/Header'
import CheckGithub from './components/CheckGithub'
import ScrollToTop from './components/ScrollToTop'
import FeaturedProjects from './components/FeaturedProjects'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import CVModal from './components/CVModal'

// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';

import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <NavBar />
      <Header setOpen={setOpen} />
      <CheckGithub />
      <FeaturedProjects />
      <ContactMe />
      <Footer />
      <CVModal open={open} setOpen={setOpen} />
      <ScrollToTop />
    </div >
  );
}

export default App;

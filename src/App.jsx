import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Components/Navbar';
import About from './Components/About';
import './App.css';
import Description from './Components/Description';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Education from './Components/Education';
import More from './Components/More';
const App = () => (
  <>
      <Navbar />
      <About />
      <Description/>
      <Projects/>
      <Education/>
      <More/>
      <Contact/>
  </>
)

export default App

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './componentsForDayFive/Home';
import About from './componentsForDayFive/About';
import StopWatch from './componentsForDayFive/StopWatch';
import ToDo from './componentsForDayFive/ToDo';
import Weather from './componentsForDayFive/Weather';
import Footer from './componentsForDayFive/Footer';
import Header from './componentsForDayFive/Header';
import Projects from './componentsForDayFive/Projects';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stopwatch" element={<StopWatch />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App

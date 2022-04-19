import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/Projects' element={ <Projects />} />
        <Route path='/Gallery' element={ <Gallery />} />
        <Route path='/Contact' element={ <Contact />} />
        <Route path='*' element={ <ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App;

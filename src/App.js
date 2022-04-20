import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <nav>
        <Link to='/'> Home </Link><br/>
        <Link to='/Projects'> Projects </Link><br/>
        <Link to='/Gallery'> Gallery </Link><br/>
        <Link to='/Contact'> Contact </Link>
      </nav>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/Projects' element={ <Projects />} />
        <Route path='/Gallery' element={ <Gallery />} />
        <Route path='/Contact' element={ <Contact />} />
        <Route path='*' element={ <ErrorPage />} />
      </Routes>
      <footer>
    <h6>&copy; 2022 SlumpBucket Inc.</h6>
      </footer>
    </Router>
  )
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Aboutme from './components/pages/Aboutme';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';


import {BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/resume' exact element={<Resume/>}/>
          <Route path='/aboutme' exact element={<Aboutme/>}/>
          <Route path='/contact' exact element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

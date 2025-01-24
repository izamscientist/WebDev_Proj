import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Home';
import BookingPage from './components/booking';
import AboutPage from './components/About';
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <div>
      
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/about" element={<AboutPage />}/>
          
       
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;

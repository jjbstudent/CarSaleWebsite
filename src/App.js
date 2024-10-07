import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import About from './components/about';
import Footer from './components/footer';

const App = () => {
  return (
    <Router> {/* Wrap everything in Router */}
      <NavBar />
      <Routes> {/* Define the routes */}
        <Route path="/" element={<Homepage />} /> {/* Route for Homepage */}
        <Route path="/about" element={<About />} /> {/* Route for About Us */}
        {/* Add other routes as needed */}
      </Routes>
      <Footer />  {/* Add Footer outside of Routes */}
    </Router>
  );
};

export default App;


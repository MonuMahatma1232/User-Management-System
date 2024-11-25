import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'; // Import Dashboard
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Settings from './pages/Settings';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard Route */}
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

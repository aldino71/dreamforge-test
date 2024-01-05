// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import ChatBot from './components/ChatBot';
import Navigator from './components/Navigator';
import GeneratedLocation from './components/GeneratedLocation';
import './css/style.css';

const App = () => {
  return (
    <Router>
      <div className="welcome"> {/* Apply Figma styles to the entire application */}
        <div className="nav-bar-wrapper"> {/* Apply Figma styles to the navigation bar */}
          <Navigator />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatbot/*" element={<ChatBot />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chatbot/generated-location" element={<GeneratedLocation />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

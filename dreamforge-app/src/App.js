// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import ChatBot from './components/ChatBot';
import Navigator from './components/Navigator';
import './App.css';
import GeneratedLocation from './components/GeneratedLocation';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigator />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/dreamsmith/*" element={<ChatBot />} />
          <Route path="/generated-location-test" element={<GeneratedLocation/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

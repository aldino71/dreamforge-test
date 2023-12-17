// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to D&D ChatBot</h1>
      <p>Scroll down to explore more:</p>
      
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/chatbot">ChatBot</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;

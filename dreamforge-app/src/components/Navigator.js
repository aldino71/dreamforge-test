// src/components/Navigator.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigator.css';

const Navigator = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <p>Dreamforge</p>
        </Link>
      </div>
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
  );
};

export default Navigator;

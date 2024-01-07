// src/components/Navigator.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigator.css';

const Navigator = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <div className="logo-content">
            <img src="/imgs/lightv-removebg-preview.png" alt="Logo" />
            <p>Dreamforge</p>
          </div>
        </Link>
      </div>
      <ul>
      <li>
          <Link to="/chatbot">Create Dreamsmith</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login/Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;

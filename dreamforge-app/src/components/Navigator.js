// src/components/Navigator.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navigator.css';

function Navigator() {
  const img1 = '/imgs/lightv-removebg-preview.png';
  const img2 = '/imgs/teal-removebg-preview.png';
  const [showImage, setShowImage] = React.useState(false);

  return (
    <nav>
      <a>
      <div className="logo">
        <img src={img1} alt="hover image"/>
        <p>
          DREAMFORGE
        </p>
      </div>
      </a>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
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
      </div>
    </nav>
  );
};

export default Navigator;

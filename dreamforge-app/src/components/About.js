// src/components/About.js
import React from 'react';
import Navigator from './Navigator';

const About = () => {
  return (
    <div>
      <Navigator />
      <br></br>
      <br></br>
      <br></br>
      {/* Rest of your content */}
      <h1>What is Dreamforge.</h1>
      <p>Building a fantasy world is not easy work. Dungeon Masters spend countless hours fleshing out their imaginative settings for campaigns and one-shots, most times going unnoticed. Dreamforge will help you speed up that process. Dreamforge is NOT designed to take the creativity away from you, but to act as a co-pilot in worldbuilding.</p>
      <br></br>
      <h2> You create the space, Dreamforge helps you fill it in.</h2>
      <p>The Chatbot is optimized to take inspiration from a variety of fantasy settings and designed to fill in any missing aspects in your stories and environments to build detail-oriented worlds for D&D players to immerse themselves in.</p>
      <p>It can be used to: </p>
      <p>1. Create super-detailed descriptions of a sorcerer's lair.</p>
      <p>2. Expand a party companions storyline and background to integrate them into your campaign's climax.</p>
      <p>3. Help generate a backstory for a new player using lore and information in your homebrew campaign setting.</p>
    </div>
  );
};

export default About;

import React from 'react';
import Cars from '../components/Cars';
import '../styles/HomePage.css';

const HomePage = () => (
  <section className="home-page">
    <h1>LATEST MODELS</h1>
    <p className="home-page-text">Please select a Car Model</p>
    <div className="dots">..............................</div>
    <Cars />
  </section>
);

export default HomePage;

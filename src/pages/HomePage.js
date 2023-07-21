import React from 'react';
import '../styles/HomePage.css';
import Cars from '../components/Cars';

const HomePage = () => (
  <section className="home-page">
    <h1>LATEST MODELS</h1>
    <p className="home-page-text">Please select a Car Model</p>
    <div className="carousel-container">
      <Cars />
    </div>
  </section>
);
export default HomePage;

import React, { useState } from 'react';
import Cars from '../components/Cars';
import '../styles/HomePage.css';

const HomePage = () => {

  return (
    <section className="home-page">
      <h1>LATEST MODELS</h1>
      <p className="home-page-text">Please select a Car Model</p>
      <div className="carousel-container">
        <Cars startIndex={carouselIndex} endIndex={carouselIndex + 3} />
      </div>
    </section>
  );
};

export default HomePage;

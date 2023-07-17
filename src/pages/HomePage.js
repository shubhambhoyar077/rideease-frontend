import React, { useState } from 'react';
import Cars from '../components/Cars';
import '../styles/HomePage.css';

const HomePage = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const scrollRight = () => {
    setCarouselIndex((prevIndex) => prevIndex + 3);
  };

  return (
    <section className="home-page">
      <h1>LATEST MODELS</h1>
      <p className="home-page-text">Please select a Car Model</p>
    </section>
  );
};

export default HomePage;

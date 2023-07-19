import React, { useState } from 'react';
import Cars from '../components/Cars';
import '../styles/HomePage.css';

const HomePage = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const scrollRight = () => {
    setCarouselIndex((prevIndex) => prevIndex + 1);
  };

  const scrollLeft = () => {
    setCarouselIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <section className="home-page">
      <h1>LATEST MODELS</h1>
      <p className="home-page-text">Please select a Car Model</p>
      <div className="carousel-container">
        <Cars startIndex={carouselIndex} endIndex={carouselIndex + 3} />
        <div className="carousel-buttons">
          <button
            type="button"
            className="btn-cr2"
            onClick={scrollLeft}
            disabled={carouselIndex === 0}
          >
            {'<'}
          </button>
          <button
            type="button"
            className="btn-cr"
            onClick={scrollRight}
            disabled={carouselIndex >= 3}
          >
            {'>'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;

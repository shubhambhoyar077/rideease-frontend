import React from 'react';
import Cars from '../components/Cars';

const HomePage = () => (
  <section className="home-page">
    <h1>LATEST MODELS</h1>
    <p>Please select a Car Model</p>
    <Cars />
  </section>
);

export default HomePage;

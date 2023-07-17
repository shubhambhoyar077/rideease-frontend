import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../redux/cars/carsSlice';
import '../styles/Carousel.css';

function Carousel() {
  const cars = useSelector((state) => state.cars.cars) || [];
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  function getRandomColor() {
    const r = Math.floor(Math.random() * 155) + 100;
    const g = Math.floor(Math.random() * 155) + 100;
    const b = Math.floor(Math.random() * 155) + 100;
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handlePrevClick() {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? cars.length - 1 : prevIndex - 1));
  }

  function handleNextClick() {
    setActiveIndex((prevIndex) => (prevIndex === cars.length - 1 ? 0 : prevIndex + 1));
  }

  if (cars.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="carousel">
      <ul className="carousel-container">
        {cars.map((car, index) => (
          <li key={car.id} className="cars-list">
            <div
              key={car.id}
              className={`carousel-card circle-color ${index === activeIndex ? 'active' : ''}`}
              style={{ backgroundColor: getRandomColor() }}
            >
              <img src={car.image} alt={car.name} className="carousel-image" />
              <div className="carousel-card-details">
                <h5>{car.name}</h5>
                <p className="dots2">..............................</p>
                <p className="car-details">
                  {car.details.slice(0, 30)}
                  {car.details.length > 30 && '...'}
                </p>
              </div>
            </div>
          </li>
        ))}
        <button type="button" className="carousel-prev" onClick={handlePrevClick}>
          &#10094;
        </button>
        <button type="button" className="carousel-next" onClick={handleNextClick}>
          &#10095;
        </button>
      </ul>
    </section>
  );
}

export default Carousel;

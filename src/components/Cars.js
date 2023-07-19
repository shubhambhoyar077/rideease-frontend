import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchCars } from '../redux/cars/carsSlice';

function Cars({ startIndex, endIndex }) {
  const cars = useSelector((state) => state.cars.cars) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  function getRandomColor() {
    const r = Math.floor(Math.random() * 155) + 100;
    const g = Math.floor(Math.random() * 155) + 100;
    const b = Math.floor(Math.random() * 155) + 100;
    return `rgb(${r}, ${g}, ${b})`;
  }

  if (cars.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="cars-section">
      <ul className="cars-container">
        {cars.slice(startIndex, endIndex).map((car) => (
          <li key={car.id} className="cars-list">
            <Link to={`car/${car.id}`} className="details-link">
              <div className="cars-card">
                <div
                  className="circle-color"
                  style={{ backgroundColor: getRandomColor() }}
                >
                  <img src={car.image} alt={car.name} className="cars-image" />
                </div>
                <div className="cars-card-details">
                  <h5 className="car-name">{car.name}</h5>
                  <p className="dots">..............................</p>
                  <p className="car-details">
                    {car.details.slice(0, 30)}
                    {car.details.length > 30 && '...'}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

Cars.propTypes = {
  startIndex: PropTypes.number.isRequired,
  endIndex: PropTypes.number.isRequired,
};

export default Cars;

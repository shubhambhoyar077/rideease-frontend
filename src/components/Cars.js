import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../redux/cars/carsSlice';

function Cars() {
  const cars = useSelector((state) => state.cars.cars) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <section className="cars-section">
      <ul className="cars-container">
        {cars.map((car) => (
          <li key={car.id}>
            <div className="cars-card">
              <img src={car.image} alt={car.name} className="cars-image" />
              <div className="cars-card-details">
                <h5>{car.name}</h5>
                <p className="dots2">..............................</p>
                <p className="car-details">{car.details}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

    </section>
  );
}

export default Cars;

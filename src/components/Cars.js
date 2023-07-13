import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../redux/cars/carsSlice';
import '../styles/Cars.css';

function Cars() {
  const cars = useSelector((state) => state.cars.cars) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <section className="cars-section">
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <div className="cars-card">
              <img src={car.image} alt={car.name} />
              <p>{car.name}</p>
              <p>{car.price}</p>
              <p>{car.details}</p>
            </div>
          </li>
        ))}
      </ul>

      
    </section>
  );
}

export default Cars;

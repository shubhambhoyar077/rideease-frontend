import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCars, deleteCar } from '../redux/cars/carsSlice';
import '../styles/deleteCar.css';

function DeleteCars() {
  const cars = useSelector((state) => state.cars.cars) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCar(id))
      .then(() => {
        dispatch(fetchCars());
      });
  };

  if (cars.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="cars-section">
      <ul className="delete-cars-list">
        {cars.map((car) => (
          <li key={car.id} className="delete-cars-container">
            <Link to={`car/${car.id}`} className="delete-cars-card">
              <div>
                <div className="circle-color">
                  <img src={car.image} alt={car.name} className="cars-image" />
                </div>
                <h5 className="delete-car-name">{car.name}</h5>
              </div>
            </Link>
            <button className="delete-button" type="button" onClick={() => handleDelete(car.id)}>
              Delete Car
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DeleteCars;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, deleteCar } from '../redux/cars/carsSlice';
import '../styles/deleteCar.css';

function DeleteCars() {
  const cars = useSelector((state) => state.cars.cars) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCar(id)).then(() => {
      dispatch(fetchCars());
    });
  };

  if (cars.length === 0) {
    return <div>Please add car</div>;
  }

  return (
    <section className="cars-section">
      <h1 className="text-center mt-3">Delete Car</h1>
      <ul className="delete-cars-list row">
        {cars.map((car) => (
          <li key={car.id} className="delete-cars-container col">
            <div className="delete-cars-card">
              <div>
                <div className="circle-color">
                  <img src={car.image} alt={car.name} className="cars-image" />
                </div>
                <h5 className="delete-car-name">{car.name}</h5>
              </div>
            </div>
            <button
              className="delete-button"
              type="button"
              onClick={() => handleDelete(car.id)}
            >
              Delete Car
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DeleteCars;

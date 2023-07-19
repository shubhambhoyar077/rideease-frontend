import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCars, deleteCar } from '../redux/cars/carsSlice';

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
      <ul>
        {cars.map((car) => (
          <li key={car.id} className="delete-cars-list">
            <Link to={`car/${car.id}`}>
              <div>
                <div
                  className="circle-color"
                  style={{ backgroundColor: getRandomColor() }}
                >
                  <img src={car.image} alt={car.name} className="cars-image" />
                </div>
                <div className="cars-card-details">
                  <h5 className="car-name">{car.name}</h5>
                </div>
              </div>
              <button className="delete-button" type="button" onClick={() => handleDelete(car.id)}>
                Delete Car
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DeleteCars;

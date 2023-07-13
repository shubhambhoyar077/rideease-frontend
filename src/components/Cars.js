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
    <section>
      <ul>
        <li>cars</li>
      </ul>

      
    </section>
  );
}

export default Cars;

import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice';
import reservationsReducer from './reservations/reservationsSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    reservations: reservationsReducer,
  },
});

export default store;

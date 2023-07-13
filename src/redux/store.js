import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});

export default store;

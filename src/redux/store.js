import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice';
import detailsReducer from './details/detailsSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    details: detailsReducer,
  },
});

export default store;

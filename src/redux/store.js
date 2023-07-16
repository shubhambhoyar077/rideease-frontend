import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice';
import authsSlice from './auths/authsSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    auths: authsSlice,
  },
});

export default store;

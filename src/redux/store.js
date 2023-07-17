import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice';
import authsReducer from './auths/authsSlice';
import userauthReducer from './auths/userauthSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    auths: authsReducer,
    userAuth: userauthReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice';
import authsReducer from './auths/authsSlice';
import userauthReducer from './auths/userauthSlice';
import detailsReducer from './details/detailsSlice';
import reservationsReducer from './reservations/reservationsSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    auths: authsReducer,
    userAuth: userauthReducer,
    details: detailsReducer,
    reservations: reservationsReducer,
  },
});

export default store;

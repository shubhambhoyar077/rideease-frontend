import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice';
import detailsReducer from './details/detailsSlice';
import reservationsReducer from './reservations/reservationsSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    details: detailsReducer,
    reservations: reservationsReducer,
  },
});

export default store;

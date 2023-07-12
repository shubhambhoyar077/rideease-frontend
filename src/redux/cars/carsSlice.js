import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
};

const carsSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: { },
});

export default carsSlice.reducer;

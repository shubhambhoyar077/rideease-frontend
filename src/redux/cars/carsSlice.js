import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
  error: null,
};

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND_HOST}/api/services`,
  );
  const carData = await response.json();
  if (response.status < 200 || response.status >= 300) {
    return 'fails';
  }
  return carData;
});

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, action) => ({
      ...state,
      cars: action.payload,
    }));
    builder.addCase(fetchCars.rejected, (state, action) => ({
      ...state,
      error: action.payload,
    }));
  },
});

export default carsSlice.reducer;

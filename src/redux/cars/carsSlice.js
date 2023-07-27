import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
  messages: '',
  deleted: false,
  error: null,
};

export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  const response = await fetch('http://127.0.0.1:4000/api/services');
  const carData = await response.json();
  if (response.status < 200 || response.status >= 300) {
    return 'fails';
  }
  return carData;
});

export const deleteCar = createAsyncThunk('deleteCar', async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:4000/api/services/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('authToken'),
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, action) => ({
        ...state,
        cars: action.payload,
      }));
    builder.addCase(
      fetchCars.rejected,
      (state, action) => ({
        ...state,
        error: action.payload,
      }),
    );
    builder.addCase(deleteCar.fulfilled, (state, action) => ({
      ...state,
      messages: action.payload,
    }));
  },
});

export default carsSlice.reducer;

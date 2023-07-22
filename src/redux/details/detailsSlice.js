import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCarDetails = createAsyncThunk(
  'details/fetchCarDetails',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_HOST}/api/services/${id}`,
      );
      if (!response.ok) {
        throw new Error('Failed to fetch car details');
      }
      const carData = await response.json();
      return carData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    carDetails: null,
    // Other state properties...
  },
  reducers: {
    // Other reducers...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarDetails.pending, (state) => state) // Handle pending state if needed
      .addCase(fetchCarDetails.fulfilled, (state, action) => ({
        ...state,
        carDetails: action.payload,
      }))
      .addCase(fetchCarDetails.rejected, (state) => state);
  },
});

export default detailsSlice.reducer;

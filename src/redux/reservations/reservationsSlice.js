import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  reservations: [],
  error: null,
};

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async () => {
    const response = await fetch(
      `${process.env.BACKEND_HOST}/api/reservations`,
      {
        method: 'GET',
        headers: {
          Authorization: localStorage.getItem('authToken'),
          'Content-Type': 'application/json',
        },
      },
    );
    const reservationsData = await response.json();

    return reservationsData;
  },
);

export const cancelReservation = createAsyncThunk(
  'reservations/cancelReservation',
  async (reservationId) => {
    const response = await fetch(
      `${process.env.BACKEND_HOST}/api/reservations/${reservationId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: localStorage.getItem('authToken'),
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.ok) {
      return reservationId;
    }
    throw new Error('Failed to cancel reservation');
  },
);

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.fulfilled, (state, action) => ({
        ...state,
        reservations: action.payload,
      }))
      .addCase(cancelReservation.fulfilled, (state, action) => ({
        ...state,
        reservations: state.reservations.filter(
          (reservation) => reservation.reservation.id !== action.payload,
        ),
      }))
      .addCase(fetchReservations.rejected, (state, action) => ({
        ...state,
        error: action.payload,
      }))
      .addCase(cancelReservation.rejected, (state, action) => ({
        ...state,
        error: action.error.message,
      }));
  },
});

export default reservationsSlice.reducer;

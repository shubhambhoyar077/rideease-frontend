import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  isLoading: true,
  error: '',
};

export const fetchAuth = createAsyncThunk(
  'cars/fetchAuth',
  async (authData, thunkAPI) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:4000/${authData.end_point}`,
        authData.method_data,
      );

      const data = await response.json();

      if ('sign_in' in authData) {
        if (authData.sign_in && data.status.code === 200) {
          const token = response.headers.get('Authorization');
          const userName = data.status.data.name;
          localStorage.setItem('authToken', token);
          localStorage.setItem('name', userName);
        } else {
          localStorage.setItem('authToken', null);
          localStorage.setItem('name', null);
        }
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

const authsSlice = createSlice({
  name: 'auths',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchAuth.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        message: action.payload.status.message,
        error: '',
      }))
      .addCase(fetchAuth.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        message: '',
        error: action.payload,
      }));
  },
});

export default authsSlice.reducer;

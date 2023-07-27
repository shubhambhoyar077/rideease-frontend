import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  isLoading: false,
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
      let data = '';
      if (!response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          data = await response.json();
        } else {
          data = { status: { message: await response.text() } };
        }
        throw new Error(data.status.message);
      }

      data = await response.json();

      if ('sign_in' in authData) {
        if (authData.sign_in && data.status.code === 200) {
          const token = response.headers.get('Authorization');
          const userName = data.status.data.name;
          const { role } = data.status.data;
          localStorage.setItem('authToken', token);
          localStorage.setItem('name', userName);
          localStorage.setItem('role', role);
        } else {
          localStorage.removeItem('authToken');
          localStorage.removeItem('name');
          localStorage.removeItem('role');
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

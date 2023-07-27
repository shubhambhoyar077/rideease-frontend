import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  isAdmin: false,
};

const userauthSlice = createSlice({
  name: 'userauth',
  initialState,
  reducers: {
    setAdmin: (state) => {
      const role = localStorage.getItem('role');
      if (role && role === 'admin') {
        return {
          ...state,
          isAdmin: true,
        };
      }
      return {
        ...state,
        isAdmin: false,
      };
    },
    setAuth: (state) => {
      const authToken = localStorage.getItem('authToken');
      if (authToken) {
        return {
          ...state,
          isAuth: true,
        };
      }
      return {
        ...state,
        isAuth: false,
      };
    },
  },
});

export const { setAuth, setAdmin } = userauthSlice.actions;

export default userauthSlice.reducer;

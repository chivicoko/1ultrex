import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import depositReducer from '../features/deposits/depositSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    deposits: depositReducer
  },
});

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Components/Auth/authSlice";

export const Store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

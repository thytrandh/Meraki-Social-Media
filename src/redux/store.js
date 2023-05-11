import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slice/Auth/authSlice";
import userSlice from "./slice/User/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userSlice
  },
 
});

export default store;

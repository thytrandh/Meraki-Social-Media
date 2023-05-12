import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slice/Auth/authSlice";
import userSlice from "./slice/User/userSlice";
import accountSlice from "./slice/Account/accountSlice";
import postSlice from "./slice/Post/postSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userSlice,
    account: accountSlice,
    post: postSlice
  },
 
});

export default store;

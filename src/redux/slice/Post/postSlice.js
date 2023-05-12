import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

const initialState = {
  currentPost: null,
  loading: false,
  error: false,
};

export const createPost = createAsyncThunk(
  "post/createPost",
  async (data, thunkAPI) => {
    try {
      const result = await api.post("/api/v1/post", {});
      //   console.log(result.data);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [createPost.pending]: (state, action) => {
      state.loading = true;
    },
    [createPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentPost = action.payload;
      state.error = false;
    },
    [createPost.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;

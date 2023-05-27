import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import api from "../../api/api";

const initialState = {
  currentFriend: null,
  isFriend: null,
  listFriend: [],
  loading: false,
  error: false,
};

export const checkFriend = createAsyncThunk(
  "friend/checkFriend",
  async (data, thunkAPI) => {
    const { friendId } = data;

    try {
      const result = await api.get(
        `http://localhost:5000/api/v1/is-Friend?friendId=${friendId}`
      );
      console.log(result.data);
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const addFriend = createAsyncThunk(
  "friend/addFriend",
  async (data, thunkAPI) => {
    const { friendId } = data;

    try {
      const result = await api.post(`/api/v1/add-friend?friendId=${friendId}`);
      message.success("Follow success!");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const unFriend = createAsyncThunk(
  "friend/unFriend",
  async (data, thunkAPI) => {
    const { friendId } = data;

    try {
      const result = await api.delete(`/api/v1/un-friend?friendId=${friendId}`);
      message.success("Unfollow success!");
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

export const getListFriend = createAsyncThunk(
  "friend/getListFriend",
  async (data, thunkAPI) => {
    const { idUser } = data;
    try {
      const result = await api.get(
        `http://localhost:5000/api/v1/list-Friend?userId=${idUser}`
      );
      localStorage.setItem(`listFriendUser-${idUser}`, JSON.stringify(result.data.data));
      return result.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error when fetching user information");
    }
  }
);

const friendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {},
  extraReducers: {
    //Check Friend
    [checkFriend.pending]: (state, action) => {
      state.loading = true;
    },
    [checkFriend.fulfilled]: (state, action) => {
      state.loading = false;
      state.isFriend = action.payload;
      state.error = false;
    },
    [checkFriend.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },

    //Add Friends
    [addFriend.pending]: (state, action) => {
      state.loading = true;
    },
    [addFriend.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentFriend = action.payload;
      state.error = false;
    },
    [addFriend.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },

    //Remove Friends
    [unFriend.pending]: (state, action) => {
      state.loading = true;
    },
    [unFriend.fulfilled]: (state, action) => {
      state.loading = false;
      state.currentFriend = action.payload;
      state.error = false;
    },
    [unFriend.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },

    //Get List Friend
    [getListFriend.pending]: (state, action) => {
      state.loading = true;
    },
    [getListFriend.fulfilled]: (state, action) => {
      state.loading = false;
      state.listFriend = action.payload;
      state.error = false;
    },
    [getListFriend.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {} = friendSlice.actions;

export default friendSlice.reducer;

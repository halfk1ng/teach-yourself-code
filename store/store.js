import { configureStore, createReducer, createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const user = createSlice({
  name: "user",
  initialState: {
    currentUser: "James"
  },
  reducers: {
    updateCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    }
  }
});

const videos = createSlice({
  name: "videos",
  initialState: {
    currentVideo: undefined
  },
  reducers: {
    updateCurrentVideo: (state, action) => {
      state.currentVideo = action.payload;
    }
  }
});

export const { updateCurrentVideo } = videos.actions;

const reducer = combineReducers({
  user: user.reducer,
  videos: videos.reducer
});

const initializeStore = () => {
  return configureStore({
    reducer
  });
};
export const store = initializeStore();

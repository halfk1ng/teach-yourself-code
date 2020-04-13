import { configureStore, createReducer, createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const user = createSlice({
  name: "user",
  initialState: {
    currentUser: undefined
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
    },
    resetVideo: (state, action) => {
      state.currentVideo = undefined;
    }
  }
});

export const { updateCurrentVideo, resetVideo } = videos.actions;
export const { updateCurrentUser } = user.actions;

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

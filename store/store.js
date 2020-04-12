import { configureStore, createReducer } from "@reduxjs/toolkit";

const initialState = {
  currentUser: "James",
  currentVideo: undefined
};

const reducer = createReducer(initialState, {
  UPDATE_CURRENT_USER: (state, action) => ({ currentUser: action.user }),
  UPDATE_CURRENT_VIDEO: (state, action) => ({ currentVideo: action.video })
});

const initializeStore = (preloadedState = initialState) => {
  return configureStore({
    reducer,
    preloadedState
  });
};
export const store = initializeStore();

import { configureStore, createReducer } from "@reduxjs/toolkit";

const initialState = {
  currentUser: "James"
};

const reducer = createReducer(initialState, {
  UPDATE_CURRENT_USER: (state, action) => ({ currentUser: action.user })
});

const initializeStore = (preloadedState = initialState) => {
  return configureStore({
    reducer,
    preloadedState
  });
};
export const store = initializeStore();

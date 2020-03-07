export const userActionTypes = {
  SET_USER: "SET_USER"
};

export const setUser = () => dispatch => {
  return dispatch({ type: userActionTypes.SET_USER });
};

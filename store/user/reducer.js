import { userActionTypes } from "./action";

const userInitialState = {
  user: undefined
};

export default (state = userInitialState, action) => {
  switch (action.type) {
    case userActionTypes.SET_USER:
      return Object.assign({}, state, {
        user_id: action.user_id
      });
    default:
      return state;
  }
};

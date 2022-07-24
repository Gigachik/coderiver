import {
  TOGGLE_LOADING,
  SET_USERS,
  SET_CURRENT_USER_COORDINATES,
} from "./constants";

const initialState = {
  isLoading: false,
  users: [],
  currentUserCoordinates: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SET_CURRENT_USER_COORDINATES:
      return {
        ...state,
        currentUserCoordinates: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

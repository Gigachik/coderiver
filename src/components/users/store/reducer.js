import { TOGGLE_LOADING, SET_USER } from "./constants";

const initialState = {
    isLoading: false,
    user: {},
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };

        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };

        default:
            return state;
    }
};

export default userReducer;

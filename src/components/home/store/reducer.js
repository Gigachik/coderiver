import { TOGGLE_LOADING, SET_USERS } from "./constants";

const initialState = {
    isLoading: false,
    users: [],
};

const homeReducer = (state = initialState, action) => {
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

        default:
            return state;
    }
};

export default homeReducer;

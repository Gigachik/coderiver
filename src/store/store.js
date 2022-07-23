import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

// import logger from "redux-logger";
import userReducer from "../components/users/store/reducer";
import userProfileReducer from "../components/usersProfile/store/reducer";

let reducers = combineReducers({
    user: userReducer,
    userProfile: userProfileReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

export default store;

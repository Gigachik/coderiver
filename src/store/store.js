import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import homeReducer from "../components/home/store/reducer";
// import logger from "redux-logger";
import userReducer from "../components/users/store/reducer";

let reducers = combineReducers({
    home: homeReducer,
    user: userReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

export default store;

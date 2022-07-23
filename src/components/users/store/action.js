import { dashboardApi } from "../../../api/api";
import { TOGGLE_LOADING, SET_USER } from "./constants";

export const setUser = (payload) => ({
    type: SET_USER,
    payload,
});
export const isLoading = (isLoading) => ({
    type: TOGGLE_LOADING,
    isLoading,
});

/* THUNK CREATOR */

export const getUserByID = (id) => async (dispatch) => {
    dispatch(isLoading(true));
    try {
        const data = await dashboardApi.getUserByID(id);
        dispatch(isLoading(false));
        dispatch(setUser(data));
    } catch (error) {
        dispatch(isLoading(false));
    }
};

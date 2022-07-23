import { dashboardApi } from "../../../api/api";
import { TOGGLE_LOADING, SET_USERS } from "./constants";

export const setUsers = (payload) => ({
    type: SET_USERS,
    payload,
});
export const isLoading = (isLoading) => ({
    type: TOGGLE_LOADING,
    isLoading,
});

/* THUNK CREATOR */

export const getUsers = () => async (dispatch) => {
    dispatch(isLoading(true));
    try {
        const data = await dashboardApi.getUsers();
        dispatch(isLoading(false));
        dispatch(setUsers(data));
    } catch (error) {
        dispatch(isLoading(false));
    }
};

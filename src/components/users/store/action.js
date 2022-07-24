import { dashboardApi } from "api/api";
import {
  TOGGLE_LOADING,
  SET_USERS,
  SET_CURRENT_USER_COORDINATES,
} from "./constants";

export const setUsers = (payload) => ({
  type: SET_USERS,
  payload,
});
export const setCurrentUserCoordinates = (payload) => ({
  type: SET_CURRENT_USER_COORDINATES,
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

export const getUserCoordinates = () => (dispatch, getState) => {
  const state = getState();
  if (!state.user.currentUserCoordinates) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      dispatch(setCurrentUserCoordinates({ lat, lon }));
    });
  }
};

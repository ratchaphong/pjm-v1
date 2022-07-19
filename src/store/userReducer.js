import { createSlice } from "@reduxjs/toolkit";
import { userRequest } from "../requestMethods";

const userInitialState = {
  users: null,
  user: null,
  isFetching: false,
  error: false,
};

const userReducers = {
  getUsersStart: (state) => {
    state.isFetching = true;
  },
  getUsersSuccess: (state, action) => {
    state.isFetching = false;
    state.users = action.payload;
  },
  getUsersFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
  getUserStart: (state) => {
    state.isFetching = true;
  },
  getUserSuccess: (state, action) => {
    state.isFetching = false;
    state.user = action.payload;
  },
  getUserFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
  updateUserStart: (state) => {
    state.isFetching = true;
  },
  updateUserSuccess: (state, action) => {
    state.isFetching = false;
    state.user = action.payload;
  },
  updateUserFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
  deleteUserStart: (state) => {
    state.isFetching = true;
  },
  deleteUserSuccess: (state, action) => {
    state.isFetching = false;
    state.user = null;
  },
  deleteUserFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: userReducers,
});

export const {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  getUserStart,
  getUserSuccess,
  getUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} = userSlice.actions;
export default userSlice.reducer;

export const getUsers =
  (params, cb = () => {}) =>
  async (dispatch) => {
    dispatch(getUsersStart());
    try {
      const res = await userRequest.get("/users", params);
      dispatch(getUsersSuccess(res.data));
      cb();
    } catch (error) {
      console.error(error.response || error);
      dispatch(getUsersFailure());
    } finally {
    }
  };

export const getUser =
  (id, cb = () => {}) =>
  async (dispatch) => {
    dispatch(getUserStart());
    try {
      const res = await userRequest.get(`/users/find/${id}`);
      dispatch(getUserSuccess(res.data));
      cb();
    } catch (error) {
      console.error(error.response || error);
      dispatch(getUserFailure());
    } finally {
    }
  };

export const updateUser =
  (id, params, cb = () => {}) =>
  async (dispatch) => {
    dispatch(updateUserStart());
    try {
      const res = await userRequest.put(`/users/${id}`, params);
      dispatch(updateUserSuccess(res.data));
      cb();
    } catch (error) {
      console.error(error.response || error);
      dispatch(updateUserFailure());
    } finally {
    }
  };

export const deleteUser =
  (id, cb = () => {}) =>
  async (dispatch) => {
    dispatch(deleteUserStart());
    try {
      const res = await userRequest.delete(`/users/${id}`);
      dispatch(deleteUserSuccess(res.data));
      cb();
    } catch (error) {
      console.error(error.response || error);
      dispatch(deleteUserFailure());
    } finally {
    }
  };

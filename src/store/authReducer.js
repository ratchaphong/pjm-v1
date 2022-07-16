import { createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../requestMethods";

const authInitialState = {
  initialized: false,
  currentUser: null,
  isFetching: false,
  error: false,
};

const authReducers = {
  loginStart: (state) => {
    state.isFetching = true;
  },
  loginSuccess: (state, action) => {
    state.isFetching = false;
    state.currentUser = action.payload;
  },
  loginFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
  logout: (state) => {
    state.isFetching = false;
    state.currentUser = null;
    state.error = false;
  },
  initialized(state) {
    state.initialized = true;
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: authReducers,
});

export const { loginStart, loginSuccess, loginFailure, logout, initialized } =
  authSlice.actions;
export default authSlice.reducer;

// export const login = async (dispatch, user) => {
//   dispatch(loginStart());
//   try {
//     const res = await publicRequest.post("/auth/login", user);
//     dispatch(loginSuccess(res.data));
//   } catch (err) {
//     dispatch(loginFailure());
//   }
// };

// export const register = async (dispatch, user) => {
//   console.log("register : ", user);
//   try {
//     const res = await publicRequest.post("/auth/register", user);
//     console.log(res);
//   } catch (err) {}
// };

export const info = () => async (dispatch) => {
  console.log("info...");
  try {
  } catch (error) {
    console.error(error.response || error);
  } finally {
    dispatch(initialized());
  }
};

export const login =
  (user, cb = () => {}) =>
  async (dispatch) => {
    dispatch(loginStart());
    try {
      const res = await publicRequest.post("/auth/login", user);
      dispatch(loginSuccess(res.data));
      cb();
    } catch (error) {
      console.error(error.response || error);
      dispatch(loginFailure());
    } finally {
    }
  };

export const register =
  (user, cb = () => {}) =>
  async () => {
    try {
      await publicRequest.post("/auth/register", user);
      cb();
    } catch (error) {
      console.error(error.response || error);
    } finally {
    }
  };

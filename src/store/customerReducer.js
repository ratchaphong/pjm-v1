import { createSlice } from "@reduxjs/toolkit";
import { userRequest } from "../requestMethods";

const customerInitialState = {
  customers: null,
  customer: null,
  isFetching: false,
  error: false,
};

const customerReducers = {
  getCustomersStart: (state) => {
    state.isFetching = true;
  },
  getCustomersSuccess: (state, action) => {
    state.isFetching = false;
    state.customers = action.payload;
  },
  getCustomersFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
  getCustomerStart: (state) => {
    state.isFetching = true;
  },
  getCustomerSuccess: (state, action) => {
    state.isFetching = false;
    state.customer = action.payload;
  },
  getCustomerFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
  addCustomerStart: (state) => {
    state.isFetching = true;
  },
  addCustomerSuccess: (state, action) => {
    state.isFetching = false;
    state.customer = action.payload;
  },
  addCustomerFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
  updateCustomerStart: (state) => {
    state.isFetching = true;
  },
  updateCustomerSuccess: (state, action) => {
    state.isFetching = false;
    state.customer = action.payload;
  },
  updateCustomerFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
  deleteCustomerStart: (state) => {
    state.isFetching = true;
  },
  deleteCustomerSuccess: (state, action) => {
    state.isFetching = false;
    state.customer = null;
  },
  deleteCustomerFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
};

const customerSlice = createSlice({
  name: "customer",
  initialState: customerInitialState,
  reducers: customerReducers,
});

export const {
  getCustomersStart,
  getCustomersSuccess,
  getCustomersFailure,
  getCustomerStart,
  getCustomerSuccess,
  getCustomerFailure,
  addCustomerStart,
  addCustomerSuccess,
  addCustomerFailure,
  updateCustomerStart,
  updateCustomerSuccess,
  updateCustomerFailure,
  deleteCustomerStart,
  deleteCustomerSuccess,
  deleteCustomerFailure,
} = customerSlice.actions;
export default customerSlice.reducer;

export const getCustomers =
  (params, cb = () => {}) =>
  async (dispatch) => {
    dispatch(getCustomersStart());
    try {
      const res = await userRequest.get("/customers", params);
      dispatch(getCustomersSuccess(res.data));
      cb();
    } catch (error) {
      console.error(error.response || error);
      dispatch(getCustomersFailure());
    } finally {
    }
  };

export const getCustomer =
  (id, cb = () => {}) =>
  async (dispatch) => {
    dispatch(getCustomerStart());
    try {
      const res = await userRequest.get(`/customers/find/${id}`);
      dispatch(getCustomerSuccess(res.data));
      cb();
    } catch (error) {
      console.error(error.response || error);
      dispatch(getCustomerFailure());
    } finally {
    }
  };

export const addCustomer =
  (params, cb = () => {}) =>
  async (dispatch) => {
    dispatch(addCustomerStart());
    try {
      const res = await userRequest.post(`/customers`, params);
      dispatch(addCustomerSuccess(res.data));
      cb();
    } catch (error) {
      console.error(error.response || error);
      dispatch(addCustomerFailure());
    } finally {
    }
  };

export const updateCustomer =
  (id, params, cb = () => {}) =>
  async (dispatch) => {
    dispatch(updateCustomerStart());
    try {
      const res = await userRequest.put(`/customers/${id}`, params);
      dispatch(updateCustomerSuccess(res.data));
      cb();
    } catch (error) {
      console.error(error.response || error);
      dispatch(updateCustomerFailure());
    } finally {
    }
  };

export const deleteCustomer =
  (id, cb = () => {}) =>
  async (dispatch) => {
    dispatch(deleteCustomerStart());
    try {
      const res = await userRequest.delete(`/customers/${id}`);
      dispatch(deleteCustomerSuccess(res.data));
      cb();
    } catch (error) {
      console.error(error.response || error);
      dispatch(deleteCustomerFailure());
    } finally {
    }
  };

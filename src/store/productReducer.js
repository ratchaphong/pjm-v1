import { createSlice } from "@reduxjs/toolkit";
import { userRequest } from "../requestMethods";

const productInitialState = {
  products: null,
  product: null,
  isFetching: false,
  error: false,
};

const productReducers = {
  getProductsStart: (state) => {
    state.isFetching = true;
  },
  getProductsSuccess: (state, action) => {
    state.isFetching = false;
    state.products = action.payload;
  },
  getProductsFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
  getProductStart: (state) => {
    state.isFetching = true;
  },
  getProductSuccess: (state, action) => {
    state.isFetching = false;
    state.product = action.payload;
  },
  getProductFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
  addProductStart: (state) => {
    state.isFetching = true;
  },
  addProductSuccess: (state, action) => {
    state.isFetching = false;
    state.product = action.payload;
  },
  addProductFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
  updateProductStart: (state) => {
    state.isFetching = true;
  },
  updateProductSuccess: (state, action) => {
    state.isFetching = false;
    state.product = action.payload;
  },
  updateProductFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
  deleteProductStart: (state) => {
    state.isFetching = true;
  },
  deleteProductSuccess: (state, action) => {
    state.isFetching = false;
    state.product = null;
  },
  deleteProductFailure: (state) => {
    state.isFetching = false;
    state.error = true;
  },
};

const productSlice = createSlice({
  name: "product",
  initialState: productInitialState,
  reducers: productReducers,
});

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
  getProductStart,
  getProductSuccess,
  getProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
} = productSlice.actions;
export default productSlice.reducer;

export const getProducts =
  (params, cb = () => {}) =>
  async (dispatch) => {
    dispatch(getProductsStart());
    try {
      const res = await userRequest.get("/products", params);
      dispatch(getProductsSuccess(res.data));
      cb();
    } catch (error) {
      console.error(error.response || error);
      dispatch(getProductsFailure());
    } finally {
    }
  };

export const getProduct =
  (id, cb = () => {}) =>
  async (dispatch) => {
    dispatch(getProductStart());
    try {
      const res = await userRequest.get(`/products/find/${id}`);
      dispatch(getProductSuccess(res.data));
      cb();
    } catch (error) {
      console.error(error.response || error);
      dispatch(getProductFailure());
    } finally {
    }
  };

export const addProduct =
  (params, cb = () => {}) =>
  async (dispatch) => {
    dispatch(addProductStart());
    try {
      const res = await userRequest.post(`/products`, params);
      dispatch(addProductSuccess(res.data));
      cb();
    } catch (error) {
      console.error(error.response || error);
      dispatch(addProductFailure());
    } finally {
    }
  };

export const updateProduct =
  (id, params, cb = () => {}) =>
  async (dispatch) => {
    dispatch(updateProductStart());
    try {
      const res = await userRequest.put(`/products/${id}`, params);
      dispatch(updateProductSuccess(res.data));
      cb();
    } catch (error) {
      console.error(error.response || error);
      dispatch(updateProductFailure());
    } finally {
    }
  };

export const deleteProduct =
  (id, cb = () => {}) =>
  async (dispatch) => {
    dispatch(deleteProductStart());
    try {
      const res = await userRequest.delete(`/products/${id}`);
      dispatch(deleteProductSuccess(res.data));
      cb();
    } catch (error) {
      console.error(error.response || error);
      dispatch(deleteProductFailure());
    } finally {
    }
  };

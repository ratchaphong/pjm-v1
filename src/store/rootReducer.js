import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import customerReducer from "./customerReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  customer: customerReducer,
  product: productReducer,
});

export default rootReducer;

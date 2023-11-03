import { configureStore } from "@reduxjs/toolkit";
import combineReducers from '../reducers/index'
import thunk from "redux-thunk";

export default configureStore({
    reducer: combineReducers,
    devTools: process.env.NODE_ENV === "development",
    //menggunakan redux thunk untuk middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  })
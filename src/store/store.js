import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "./reducer/citiesReducer";

const store = configureStore({
  reducer: {
    citiesStore: citiesReducer,
  },
});

export default store;

import { createReducer } from "@reduxjs/toolkit";
import { getCities, setLastView, setSearch } from "../actions/citiesActions";

const initialState = {
  cities: [],
  search: "",
  loading: true,
  error: false,
  lastView: "",
};

export const citiesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSearch, (state, action) => {
      state.search = action.payload;
    })
    .addCase(setLastView, (state, action) => {
      state.lastView = action.payload;
    })
    .addCase(getCities.fulfilled, (state, action) => {
      state.loading = false;
      state.cities = action.payload;
      state.error = false;
      console.log("Solicitud completada con éxito", action.payload);
    })
    .addCase(getCities.pending, (state, action) => {
      state.loading = true;
      console.log("Solicitud en estado pending");
    })
    .addCase(getCities.rejected, (state) => {
      state.error = true;
      state.loading = false;
      console.log("error");
    });
});

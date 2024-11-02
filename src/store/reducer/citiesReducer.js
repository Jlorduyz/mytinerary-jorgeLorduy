import { createReducer } from "@reduxjs/toolkit";
import {
  getCities,
  setLastView,
  setSearch,
  getItineraries,
} from "../actions/citiesActions";

const initialState = {
  cities: [],
  itineraries: [],
  search: "",
  loading: true,
  loadingItineraries: true,
  errorItineraries: false,
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
    })
    .addCase(getCities.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getCities.rejected, (state) => {
      state.error = true;
      state.loading = false;
      console.log("error");
    })
    .addCase(getItineraries.fulfilled, (state, action) => {
      state.loadingItineraries = false;
      state.itineraries = action.payload;
      state.errorItineraries = false;
    })
    .addCase(getItineraries.pending, (state, action) => {
      state.loadingItineraries = true;
    })
    .addCase(getItineraries.rejected, (state) => {
      state.errorItineraries = true;
      state.loadingItineraries = false;
      console.log("error");
    });
});

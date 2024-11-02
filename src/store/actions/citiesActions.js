import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setSearch = createAction("SET_SEARCH");
const setLastView = createAction("SET_LASTVIEW");

const getCities = createAsyncThunk("GET_CITIES", async () => {
  console.log("funcion asincrona ");
  const res = await axios.get("http://localhost:8080/api/cities/all");
  console.log(res.data.response);
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return res.data.response;
});
const getItineraries = createAsyncThunk("GET_ITINERARIES", async (url) => {
  const res = await axios.get(url);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return res.data.response;
});

export { setSearch, getCities, setLastView, getItineraries };

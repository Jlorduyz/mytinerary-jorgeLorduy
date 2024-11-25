import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setUser= createAction("setUser", (data)=>{
    return {
        payload:data,
    }
})

const logOut = createAction("logOut");

const signIn = createAsyncThunk(
    "signIn",
    async ({ email, password }, { rejectWithValue }) => {
        const body = { email, password };
        try {
            const res = await axios.post("http://localhost:8080/api/auth/signIn", body);
            localStorage.setItem("token", res.data.token);

            return res.data;
        } catch (error) {

                return rejectWithValue(error.response.data.message);
        }
    }
);


export {setUser, logOut, signIn}
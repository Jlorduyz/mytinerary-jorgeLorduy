import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const setUser= createAction("setUser", (data)=>{
    return {
        payload:data,
    }
})

const logOut = createAsyncThunk("logOut", async (_, { rejectWithValue }) => {
    try {
        const userLocal = JSON.parse(localStorage.getItem("user"));
        const token = localStorage.getItem("token");

        const res = await axios.post(
            "http://localhost:8080/api/auth/signOut",
            { email: userLocal.email },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return res.data;
    } catch (error) {
        console.error("Error in logOut:", error);
        return rejectWithValue(error.response.data.message);

    }
});

const signIn = createAsyncThunk(
    "signIn",
    async ({ email, password }, { rejectWithValue }) => {
        const body = { email, password };
        try {
            const res = await axios.post("http://localhost:8080/api/auth/signIn", body);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user))

            return res.data;
        } catch (error) {

                return rejectWithValue(error.response.data.message);
        }
    }
);
const signUp = createAsyncThunk('signUp', async ({email, password,name ,lastname, country, photoURL}, { rejectWithValue }) => {
    const body = {email, password,name ,lastname, country, photoURL};
    try {
        const res = await axios.post("http://localhost:8080/api/user/register", body);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user))

        return res.data;
    } catch (error) {

        return rejectWithValue(error.response.data.message);
    }
})


export {setUser, logOut, signIn, signUp}
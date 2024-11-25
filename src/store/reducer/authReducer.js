import { createReducer } from "@reduxjs/toolkit";
import {setUser,logOut,signIn} from "../actions/authActions.js";
import error from "eslint-plugin-react/lib/util/error.js";

const initialState = {
    loading : false,
    error : false,
    user : null,
    token : null
}

const reducer =createReducer(initialState,(builder)=>{
    builder.addCase(signIn.fulfilled,(state,action)=>{
        state.loading = false
            state.error = false
            state.user = action.payload.user
            state.token = action.payload.token
    })
        .addCase(signIn.pending,(state,action)=>{
            state.loading = true
                state.error = false
                state.user = null
                state.token = null
        })
        .addCase(signIn.rejected,(state,action)=>{
            state.loading = false
                state.error = action.payload

                state.user = null
                state.token = null
        }).addCase(setUser,(state,action)=>{
        state.user = action.payload.user
            state.token = action.payload.token
    })

        .addCase(logOut,(state,action)=>{
            localStorage.removeItem("token");
            state.user = null
                state.token = null
        })
})

export default reducer
import { createReducer } from "@reduxjs/toolkit";
import {setUser, logOut, signIn, signUp} from "../actions/authActions";

const initialState = {
    loading : false,
    error : false,
    errorReg: false,
    user : JSON.parse(localStorage.getItem("user")) || null,
    token :localStorage.getItem('token')|| null,

}

const reducer =createReducer(initialState,(builder)=>{
    builder.addCase(signIn.fulfilled,(state,action)=>{
        state.loading = false
            state.error = false
            state.user = action.payload.user
            state.token = action.payload.token
    }).addCase(signIn.pending,(state)=>{
            state.loading = true
                state.error = false
                state.user = null
                state.token = null
        }).addCase(signIn.rejected,(state,action)=>{
            state.loading = false
                state.error = action.payload

                state.user = null
                state.token = null
        }).addCase(setUser,(state,action)=>{
        state.user = action.payload.user
            state.token = action.payload.token
    }).addCase(logOut.pending,()=>{
    }).addCase(logOut.rejected,(state,action)=>{
        state.user = null
        state.token = null
        console.log("error logOut")
        console.log("error mensaje"+action.payload)
    }).addCase(logOut.fulfilled,(state)=>{
        console.log('deslogueado')
        state.user = null
        state.token = null
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }).addCase(signUp.fulfilled,(state,action)=>{
        state.loading = false
        state.error = false
        state.user = action.payload.user
        state.token = action.payload.token
            state.createUser  = null
    }).addCase(signUp.pending,(state)=>{
        state.loading = true
        state.error = false
        state.user = null
        state.token = null
    }).addCase(signUp.rejected,(state,action)=>{
            state.loading = false
            state.errorReg = action.payload
            state.user = null
            state.token = null
        })
})

export default reducer
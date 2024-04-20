import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios"

export const loginUser=createAsyncThunk(
    "user/loginUser",
    async(userCredentials)=>{
        const request= await axios.post("http://localhost:3000/login",userCredentials)
        const response=request.data
        
        localStorage.setItem("user",JSON.stringify(response))
        return response
    }
)

export const logoutUser=createAsyncThunk(
    "user/logoutUser",
    async()=>{
        
         localStorage.removeItem("user")
        return {username:"",password:""}
    }
)

const userSlice=createSlice({
    name:"user",
    initialState:{
        loading:false,
        user:localStorage.getItem?JSON.parse(localStorage.getItem("user")):{username:"",password:""},
        error:null
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending,(state)=>{
            state.loading=true
            state.user={username:"",password:""}
            state.error=null
        })

        .addCase(loginUser.fulfilled,(state,action)=>{
            state.loading=false
            state.user=action.payload
            state.error=null
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.loading=false
            state.user={username:"",password:""}
            console.log(action.error.message)
            state.error=action.error.message
        })
        .addCase(logoutUser.pending,(state)=>{
            state.loading=true
            state.user={username:"",password:""}
            state.error=null
        })

        .addCase(logoutUser.fulfilled,(state)=>{
            state.loading=false
            state.user={username:"",password:""}
            state.error=null
        })
        .addCase(logoutUser.rejected,(state)=>{
            state.loading=false
            state.user={username:"",password:""}
            console.log(action.error.message)
            state.error=action.error.message
        })

    }
    
})




export default userSlice.reducer
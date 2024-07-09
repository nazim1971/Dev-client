import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// create Student
export const createUser = createAsyncThunk("createUser", async(data, {rejectWithValue})=>{
    try {
        const res = await axios.post('http://localhost:3000/addStudent', data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
// Get all Student
export const getUser = createAsyncThunk("getUser", async( email,{rejectWithValue})=>{
    try {
        const res = await axios.get(`http://localhost:3000/allStudent/${email}`) 
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
} )

// update user 
export const updateUser = createAsyncThunk("updateUser", async( id,data,{rejectWithValue})=>{
    try {
        const res = await axios.put(`http://localhost:3000/updateStudent/${id}`,data) 
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
} )

export const userDetails = createSlice({
    name: "userDetails",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            
            .addCase(getUser.pending, (state) => {
                state.loading = true;
              })
              .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
              })
              .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
              })

              .addCase(updateUser.pending, (state) => {
                state.loading = true;
              })
              .addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
              })
              .addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
              })
        }
})

export default userDetails.reducer;
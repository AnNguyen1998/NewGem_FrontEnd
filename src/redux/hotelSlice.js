import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import axiosInstance from "../utils/axiosInstance";

const initialState = {
    items: [],
    totalPage: 0,
    status: "start",
    errors: null,
    message: null,
}
const url = "http://localhost:8080/hotel"

export const fetchItems = createAsyncThunk("hotel/fetchItems", async (page, thunkAPI) => {
    try {
        const response = await axios.get(url + "/allHotel", {
            params: {
                page: page,
                size: 5
            }
        })
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {
        removeMessageError:(state)=>{
            state.message=null;
            state.errors =null;
            state.status=""
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchItems.fulfilled,(state, action)=>{
            state.items = action.payload.data.hotel
            state.totalPage = action.payload.data.total_page
            state.status = action.payload.status
        })
        .addCase(fetchItems.rejected, (state, action)=>{
            
        })
    }
})
export const { removeMessageError} = hotelSlice.actions
export default hotelSlice.reducer 
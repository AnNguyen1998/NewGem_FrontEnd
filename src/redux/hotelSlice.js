import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import axiosInstance from "../utils/axiosInstance";

const initialState = {
    items: null,
    hotel: null,
    totalPage: 0,
    status: "start",
    errors: null,
    message: null,
}
const url = "http://localhost:8080/hotel"
console.log(axiosInstance)
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

export const fetchItemById = createAsyncThunk("hotel/fetchItemById", async (id, thunkAPI) => {
    try {
        const response = await axios.get(url + "/" + id)
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const fetchItemByCity = createAsyncThunk("hotel/fetchItemByCity", async ({city, max,min}, thunkAPI) => {
    try {
        const response = await axios.get(url + "/search",{
            params: {
                city: city,
                max: max,
                min: min
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
        .addCase(fetchItemById.fulfilled,(state, action)=>{
            state.items = action.payload.items
            state.hotel = action.payload.data
            state.status = action.payload.status
        })
    }
})
export const { removeMessageError} = hotelSlice.actions
export default hotelSlice.reducer 
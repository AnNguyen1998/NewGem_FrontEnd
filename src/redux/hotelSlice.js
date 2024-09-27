import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import axiosInstance from "../utils/axiosInstance";

const initialState = {
    items: null,
    hotel: null,
    total: null,
    totalPage: 0,
    status: "start",
    errors: null,
    message: null,
}
const baseURL = process.env.REACT_APP_API_URL;

export const createHotel = createAsyncThunk(
    "hotel/createHotel",
    async (hotelData, thunkAPI) => {
        try {
            const response = await axiosInstance.post('/hotel/createHotel', hotelData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const updateHotel = createAsyncThunk(
    "hotel/updateHotel",
    async (hotelData, thunkAPI) => {
        try {
            const response = await axiosInstance.put(`/hotel/updateHotel/${hotelData.id}`, hotelData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const changeHotelStatus = createAsyncThunk(
    "hotel/changeHotelStatus",
    async (hotelId, thunkAPI) => {
        try {
            const response = await axiosInstance.patch('/hotel/disable/'+ hotelId);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


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

export const fetchItemById = createAsyncThunk("hotel/fetchItemById", async (id, thunkAPI) => {
    try {
        const response = await axios.get(url + "/" + id)
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const searchHotel = createAsyncThunk("hotel/searchHotel", async ({city, max, min}, thunkAPI) => {
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

export const totalHotel = createAsyncThunk("hotel/totalHotel", async (arg,thunkAPI)=>{
    try {
        const response = await axios.get(url + "/totalHotel",{})
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
        .addCase(createHotel.fulfilled, (state,action) => {
            state.hotel = action.payload.data;
            state.message = action.payload.message;
            state.status = action.payload.status
        })
        .addCase(createHotel.rejected, (state,action) => {
            state.errors = action.payload.message;
            state.status = action.payload.status;
        })
        .addCase(updateHotel.fulfilled, (state, action) => {
            state.hotel = action.payload.data;
            state.message = action.payload.message;
            state.status = action.payload.status
            console.log(action)
        })
        .addCase(updateHotel.rejected, (state,action) => {
            state.errors = action.payload.message;
            state.status = action.payload.status;
            console.log(action)
        })
        .addCase(searchHotel.fulfilled,(state, action)=>{
            state.items = action.payload.data.hotel
            state.totalPage = action.payload.data.total_page
            state.status = action.payload.status
        })
        .addCase(searchHotel.rejected, (state, action)=>{
            state.errors = action.payload.message;
            state.status = action.payload.status;
        })
        .addCase(totalHotel.fulfilled,(state, action)=>{
            state.total = action.payload.data
            state.status = action.payload.status
        })
        .addCase(totalHotel.rejected, (state, action)=>{
            state.errors = action.payload.message;
            state.status = action.payload.status;
        })
    }
})
export const { removeMessageError} = hotelSlice.actions
export default hotelSlice.reducer 
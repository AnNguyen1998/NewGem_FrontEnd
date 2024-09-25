import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance"; 

const initialState = {
    items: null,
    totalPage: 0,
    status: "start",
    errors: null,
    message: null,
};


const BASE_URL = process.env.REACT_APP_API_URL; 

export const createRoom = createAsyncThunk(
    "room/createRoom",
    async (roomData, thunkAPI) => {
        try {
            const response = await axiosInstance.post('/room/createRoom', roomData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


export const fetchItems = createAsyncThunk(
    "room/fetchItems",
    async ({ page, hotelId }, thunkAPI) => {
        try {
            const response = await axiosInstance.get(`${BASE_URL}/room/allRoom/${hotelId}`, {
                params: {
                    page,
                    size: 5,
                },
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


export const fetchItemById = createAsyncThunk(
    "room/fetchItemById",
    async (id, thunkAPI) => {
        try {
            const response = await axiosInstance.get(`${BASE_URL}/room/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        removeMessageError: (state) => {
            state.message = null;
            state.errors = null;
            state.status = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.items = action.payload.data.items; 
                state.totalPage = action.payload.data.pageSize;
                state.status = action.payload.status;
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.errors = action.payload;
                state.status = "failed";
            })
            .addCase(fetchItemById.fulfilled, (state, action) => {
                state.items = action.payload.data; 
                state.status = action.payload.status;
            });
    }
});

export const { removeMessageError } = roomSlice.actions;
export default roomSlice.reducer;

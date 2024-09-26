import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

const initialState = {
    items: null,
    totalPage: 0,
    status: "start",
    errors: null,
    message: null,
};

const baseURL = process.env.REACT_APP_API_URL;

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

export const changeRoomStatus = createAsyncThunk(
    "room/createRoom",
    async (hotelId, thunkAPI) => {
        try {
            const response = await axiosInstance.patch('/room/changeStatus/'+ hotelId);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const updateRoom = createAsyncThunk(
    "room/updateRoom",
    async (roomData, thunkAPI) => {
        try {
            const response = await axiosInstance.put(`/room/updateRoom/${roomData.hotelId}`, roomData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getAllRoomsByHotelId = createAsyncThunk(
    "room/getAllRoomsByHotelId",
    async ({ page, hotelId }, thunkAPI) => {
        try {
            const response = await axios.get(`${baseURL}/room/allRoom/${hotelId}`, {
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

export const getRoomById = createAsyncThunk(
    "room/getRoomById",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`${baseURL}/room/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const roomSlice = createSlice({
    name: "room",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllRoomsByHotelId.fulfilled, (state, action) => {
                state.items = action.payload.data.items;
                state.totalPage = action.payload.data.totalPage;
                state.status = "success";
            })
            .addCase(getAllRoomsByHotelId.rejected, (state, action) => {
                state.errors = action.payload;
                state.status = "failed";
            })
            .addCase(getRoomById.fulfilled, (state, action) => {
                state.items = action.payload.data;
                state.status = "success";
            })
            .addCase(getRoomById.rejected, (state, action) => {
                state.errors = action.payload;
                state.status = "failed";
            });
    },
});

export default roomSlice.reducer;

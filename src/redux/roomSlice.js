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
    "room/changeRoomStatus",
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
            const response = await axiosInstance.put(`/room/updateRoom/${roomData.roomId}`, roomData);
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

export const getRoomsByType = createAsyncThunk(
    "room/getRoomsByType",
    async ({ type, page }, thunkAPI) => {
        try {
            const response = await axios.get(`${baseURL}/room/type`, {
                params: {
                    type: type,
                    page: page,
                    size: 6,
                },
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const createBookroom = createAsyncThunk(
    "room/createBookroom",
    async (bookData, thunkAPI) => {
        try {
            const response = await axiosInstance.post(`${baseURL}/reservation/bookRoom`, bookData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const searchRooms = createAsyncThunk(
    "room/getRoomsByHotelId",
    async ({ hotelId, page, type, max }, thunkAPI) => {
        try {
            const response = await axios.get(`${baseURL}/room/search`, {
                params: {
                    hotel: hotelId,
                    type: type,
                    max: max,
                    page: page,
                    size: 6
                },
            });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const roomSlice = createSlice({
    name: "room",
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
            .addCase(getAllRoomsByHotelId.fulfilled, (state, action) => {
                state.items = action.payload.data.items;
                state.totalPage = action.payload.data.totalPage;
                state.status = action.payload.status
                state.message = action.payload.message
            })
            .addCase(getAllRoomsByHotelId.rejected, (state, action) => {
                state.errors = action.payload.message;
                state.status = action.payload.status;
            })
            .addCase(createRoom.fulfilled, (state,action) => {
                state.message = action.payload.message;
                state.status = action.payload.status
            })
            .addCase(createRoom.rejected, (state,action) => {
                state.errors = action.payload.message;
                state.status = action.payload.status;
            })
            .addCase(updateRoom.fulfilled, (state, action) => {
                state.message = action.payload.message;
                state.status = action.payload.status
            })
            .addCase(updateRoom.rejected, (state,action) => {
                state.errors = action.payload.message;
                state.status = action.payload.status;
            })
            .addCase(getRoomById.fulfilled, (state, action) => {
                state.items = action.payload.data;
                state.status = "success";
            })
            .addCase(getRoomById.rejected, (state, action) => {
                state.errors = action.payload.message;
                state.status = action.payload.status;
            })
            .addCase(createBookroom.fulfilled, (state, action) => {
                state.items = action.payload.data;
                state.status = action.payload.status;
            })
            .addCase(createBookroom.rejected, (state, action) => {
                state.errors = action.payload.message;
                state.status = action.payload.status;
            })
            .addCase(getRoomsByType.fulfilled, (state, action) => {
                state.items = action.payload.data.items;
                state.totalPage = action.payload.data.totalPage;
                state.status = action.payload.status
                state.message = action.payload.message
            })
            .addCase(getRoomsByType.rejected, (state, action) => {
                state.errors = action.payload.message;
                state.status = action.payload.status;
            })
            .addCase(searchRooms.fulfilled, (state, action) => {
                state.items = action.payload.data.items;
                state.totalPage = action.payload.data.totalPage;
                state.status = action.payload.status
                state.message = action.payload.message
            })
            .addCase(searchRooms.rejected, (state, action) => {
                state.errors = action.payload.message;
                state.status = action.payload.status;
            })
    },
});

export default roomSlice.reducer;
export const { removeMessageError} = roomSlice.actions

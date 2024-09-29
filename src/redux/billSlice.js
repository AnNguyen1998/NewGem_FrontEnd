import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../utils/axiosInstance";

const initialState = {
    items: null,
    bill: null,
    totalPage: 0,
    status: "start",
    errors: null,
    message: null,
};

const baseURL = process.env.REACT_APP_API_URL;

export const createBill = createAsyncThunk(
    "bill/createBill",
    async (billData, thunkAPI) => {
        try {
            const response = await axiosInstance.post('/bill/createBill', billData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const payBill = createAsyncThunk(
    "bill/payBill",
    async (billData, thunkAPI) => {
        try {
            const response = await axiosInstance.post('/bill/payBill', billData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getAllBillByHotel = createAsyncThunk(
    "bill/getAllBill",
    async ({ hotelId, page }, thunkAPI) => {
        try {
            const response = await axiosInstance.get(`/bill/getBillHotel/` + hotelId);
            console.log(response)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const billSlice = createSlice({
    name: "bill",
    initialState,
    reducers: {
        removeMessageError:(state)=>{
            state.message=null;
            state.errors =null;
            state.status=null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createBill.fulfilled, (state,action) => {
                state.bill = action.payload.data
                state.message = action.payload.message;
                state.status = action.payload.status
            })
            .addCase(createBill.rejected, (state,action) => {
                state.errors = action.payload.message;
                state.status = action.payload.status;
            })
            .addCase(payBill.fulfilled, (state,action) => {
                state.bill = action.payload.data
                state.message = action.payload.message;
                state.status = action.payload.status
            })
            .addCase(payBill.rejected, (state,action) => {
                state.errors = action.payload.message;
                state.status = action.payload.status;
            })
            .addCase(getAllBillByHotel.fulfilled, (state,action) => {
                state.items = action.payload.data
                state.message = action.payload.message;
                state.status = action.payload.status
                console.log(action)
            })
            .addCase(getAllBillByHotel.rejected, (state,action) => {
                state.errors = action.payload.message;
                state.status = action.payload.status;
                console.log(action)
            })
    },
});

export default billSlice.reducer;
export const { removeMessageError} = billSlice.actions

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    items: [],
    totalPage: 0,
    status: "start",
    error: null,
    message: null,
}
const url = ""

export const fetchItems = createAsyncThunk("student/fetchItems", async (page, thunkAPI) => {
    try {
        const response = await axios.get(url + "/pagination", {
            params: {
                page: page,
                size: 3
            }
        })
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})


export const studentSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        removeMessageError:(state)=>{
            state.message=null;
            state.error =null;
            state.status=""
        }
    },
    extraReducers: (builder) => {
    }
})
export const { removeMessageError} = studentSlice.actions
export default studentSlice.reducer 
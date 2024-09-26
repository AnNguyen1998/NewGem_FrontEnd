// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from '../utils/axiosInstance';

// Thay đổi URL và cấu hình phù hợp với API của bạn
const API_URL = "http://localhost:8080/user"

export const register = createAsyncThunk('user/register', async ({ firstName, lastName, email, phone, username, password
}, thunkAPI) => {
    try {
        console.log(`firstName: ${firstName}, lastName: ${lastName}, email: ${email}, phone: ${phone}, username: ${username}, password: ${password}`)
        const response = await axios.post(`${API_URL}/addUser`, 
            {
                "firstName": firstName,
                "lastName": lastName,
                "email": email,
                "phone": phone,
                "dateOfBirth": "1970-01-01",
                "gender": "MALE",
                "username": username,
                "password": password
              },
        {
            headers: {
            'Content-Type': 'application/json', // Đảm bảo gửi yêu cầu với Content-Type là JSON
            }
         }
        );
        console.log(response.data)
        return response.data; // Trả về dữ liệu từ phản hồi
    } catch (error) {
        console.log(`firstName: ${firstName}, lastName: ${lastName}, email: ${email}, phone: ${phone}, username: ${username}, password: ${password}`)
        console.log(error)
        return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
    }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId: null,
        accessToken: null,
        refreshToken: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        setUserId(state, action) {
            state.userId = action.payload;
        },
    },
    extraReducers: {
        [register.pending]: (state, action) => {
            state.status = 'loading';
        },
        [register.fulfilled]: (state, action) => {
            state.status = 'succeeded';
            // Add any fetched posts to the array
            // state.user = action.payload;
            
        },
        [register.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        },
    },
});
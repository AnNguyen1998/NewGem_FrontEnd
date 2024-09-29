// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from '../utils/axiosInstance';

// Thay đổi URL và cấu hình phù hợp với API của bạn
const API_URL = "http://localhost:8080/auth"

export const signin = createAsyncThunk('auth/login', async ({ username, password }, thunkAPI) => {
  try {
    console.log(`username: ${username}, password: ${password}`)
    const response = await axios.post(`${API_URL}/signin`,
      { "username": username, password },
      {
        headers: {
          'Content-Type': 'application/json', // Đảm bảo gửi yêu cầu với Content-Type là JSON
        }
      }
    );
    console.log(response.data)
    return response.data; // Trả về dữ liệu từ phản hồi
  } catch (error) {
    console.log(`username: ${username}, password: ${password}`)
    console.log(error)
    return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
});

export const userProfile = createAsyncThunk('auth/userProfile', async (id, thunkAPI) => {
  try {
    const response = await axiosInstance.get("http://localhost:8080/user/getUser/" + id, {
      headers: {
        'Content-Type': 'application/json', // Đảm bảo gửi yêu cầu với Content-Type là JSON
      }
    })
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
})

export const fetchUser = createAsyncThunk('auth/fetchUser', async (page, thunkAPI) => {
  try {
      const response = await axiosInstance.get("http://localhost:8080/user/getAllUser", {
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

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  // Xóa token hoặc thực hiện các thao tác logout khác
  try {
    // Ví dụ xóa token khỏi localStorage

    return {}; // Trả về giá trị trống khi logout thành công
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
  }
});
const getFromLocalStorage = (key, defaultValue) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : defaultValue;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: null,
    userId: getFromLocalStorage('userId', null),
    accessToken: null,
    refreshToken: null,
    status: 'idle',
    error: null,
    user: null,
    users: null
  },
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
    },
    removeMessageError: (state) => {
      state.message = null;
      state.errors = null;
      state.status = ""
    }
    // setUser(state, action) {
    //   state.user = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken
        state.userId = action.payload.userId;
        state.username = action.payload.username;
        console.log(action.payload)
        // state.user = action.payload.username;
        // Lưu token vào localStorage
        localStorage.setItem('accessToken', action.payload.accessToken);
        localStorage.setItem('refreshToken', action.payload.refreshToken);
        localStorage.setItem('userId', action.payload.userId);
        localStorage.setItem("role", action.payload.role)
        localStorage.setItem('username', action.payload.username)
        // localStorage.setItem('user', JSON.stringify(action.payload.username));
        localStorage.setItem('user', action.payload.username);
      })
      .addCase(signin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.error; // Giả sử lỗi nằm trong `error`
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = 'idle';
        state.refreshToken = null;
        state.accessToken = null;
        state.userId = null;
        // state.user = null;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userId');
        // localStorage.removeItem('user');
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.error; // Giả sử lỗi nằm trong `error`
      })
      .addCase(userProfile.fulfilled, (state, action)=>{
        state.user = action.payload.data
      })
      .addCase(userProfile.rejected, (state, action)=>{
        state.user = action.payload.data
        state.error = action.payload.message
      })
      .addCase(fetchUser.fulfilled, (state, action)=>{
        state.users = action.payload.data.items
      })
      .addCase(fetchUser.rejected, (state, action)=>{
        state.users = action.payload.data
        state.error = action.payload.message
      })
      ;
  },
});

export const { setUser, removeMessageError } = authSlice.actions;
export default authSlice.reducer;
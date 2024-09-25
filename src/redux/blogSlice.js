// // src/features/auth/authSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// // Thay đổi URL và cấu hình phù hợp với API của bạn
// const BASE_URL = 'http://localhost:8080';

// export const getAll= createAsyncThunk('/blog', async ({ currentPage, limit },thunkAPI) => {
//   const url= BASE_URL+`/blog/page=${currentPage}&size=${limit}`;
//   try {
//     const response = await axios.get(url);
//     return response.data; // Trả về dữ liệu từ phản hồi
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
//   }
// });
// export const addNewBlog= createAsyncThunk('blog/newBlog', async (blog,thunkAPI) => {
//   const url= BASE_URL+`/blog/newBlog`;
//   try {
//     const response = await axios.post(url, blog);
//     return response.data; // Trả về dữ liệu từ phản hồi
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
//   }
// });
// export const deleteBlog= createAsyncThunk('blog', async (id,thunkAPI) => {
//    const url= BASE_URL+`/delete/${id}`;
//   try {
//     const response = await axios.delete(url);
//     return response.data; // Trả về dữ liệu từ phản hồi
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
//   }
// });

// export const updateBlog= createAsyncThunk('blog/update', async ({id,blog},thunkAPI) => {
//   const url= BASE_URL+`/blog/updateBlog/${id}`;
//   try {
//     console.log(blog)
//     const response = await axios.put(url,blog);
//     return response.data; // Trả về dữ liệu từ phản hồi
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
//   }
// });

// export const searchBlogWithId = createAsyncThunk('blog/searchBlogWithId', async (id, thunkAPI) => {
//   const url = `${BASE_URL}/blog/${id}`;
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data);
//   }
// });

// // export const uploadImage = createAsyncThunk('student/uploadImage', async ({id, formData}, thunkAPI) => {
// //   const url = `${BASE_URL}/student/uploads/${id}`;
// //   try {
// //     const response = await axios.post(url,formData,{
// //       headers:{
// //         'Content-Type':'multipart/form-data'
// //       }
// //     })
// //     return response.data;
// //   } catch (error) {
// //     return thunkAPI.rejectWithValue(error.response.data);
// //   }
// // });

// export const getAllStudentDetail = createAsyncThunk('blog/getBlogDetail', async (id,thunkAPI) => {
//   const url = `${BASE_URL}/blog/${id}`;
//   try {
//     const response = await axios.get(url);
//     return response.data; // Trả về dữ liệu từ phản hồi
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
//   }
// });

// const blogSlice = createSlice({
//   name: 'blog',
//   initialState: {
//     status: 'idle',
//     error: null,
//     blogs:null,
//     blogDetails:null,
//     totalPages:10,
//     message:"",
//   },
//   reducers: {
//     resetStatusAndMessage: (state) => {
//       state.status = null;
//       state.message = "";
//       state.error=null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//     .addCase(getDetail.fulfilled, (state, action) => {
//       state.status=action.payload.status
//       state.studentDetails = action.payload.data;
//     })
//     .addCase(getAllStudentDetail.rejected, (state, action) => {
//       state.status=action.payload.status
//       state.message=action.payload.message
//       state.error=action.payload.data
//     })
//       .addCase(getAll.fulfilled, (state, action) => {
//         state.students = action.payload.data.studentResonseList
//         state.totalPages = action.payload.data.totalPages

//       })
//       .addCase(addNewStudent.fulfilled, (state, action) => {
//         state.status=action.payload.status
//         state.message=action.payload.message
//         state.students = [...state.students, action.payload.data];
//       })
//       .addCase(addNewStudent.rejected, (state, action) => {
//         state.status=action.payload.status
//         state.message=action.payload.message
//         state.error=action.payload.data
//       })
//       .addCase(deleteStudent.fulfilled, (state, action) => {
//         state.status=action.payload.status
//         state.message=action.payload.message
//         state.students = state.students.filter(student => student.id !== action.payload.data);
//       })
//       .addCase(deleteStudent.rejected, (state, action) => {
//         state.status=action.payload.status
//         state.message=action.payload.message
//         state.error=action.payload.data
//       })
//       .addCase(editStudent.fulfilled, (state, action) => {
//         state.status=action.payload.status
//         state.message=action.payload.message
//         state.students = state.students.map(student =>
//           student.id === action.payload.data.id ? action.payload.data : student
//       );
//       })
//       .addCase(editStudent.rejected, (state, action) => {
//         state.status=action.payload.status
//         state.message=action.payload.message
//         state.error=action.payload.data
//       })
//       .addCase(searchStudents.fulfilled, (state, action) => {
//         state.students = action.payload.data; 
//         state.status=action.payload.status
//       })
//       .addCase(searchStudents.rejected, (state, action) => {
//         state.status=action.payload.status
//         state.message=action.payload.message
//         state.error = action.payload.data;
//       })
//       .addCase(searchStudentsByYear.fulfilled, (state, action) => {
//         state.students = action.payload.data; 
//         state.status=action.payload.status
//       })
//       .addCase(searchStudentsByYear.rejected, (state, action) => {
//         state.status=action.payload.status
//         state.message=action.payload.message
//         state.error = action.payload.data;
//       })
//       .addCase(searchStudentsXepLoai.fulfilled, (state, action) => {
//         state.students = action.payload.data; 
//         state.status=action.payload.status
//       })
//       .addCase(searchStudentsXepLoai.rejected, (state, action) => {
//         state.status=action.payload.status
//         state.message=action.payload.message
//         state.error = action.payload.data;
//       })
//       .addCase(search.fulfilled, (state, action) => {
      
//         state.students = action.payload.data; 
//         state.status=action.payload.status
//       })
//       .addCase(search.rejected, (state, action) => {
//         state.status=action.payload.status
//         state.message=action.payload.message
//         state.error = action.payload.data;
//       })
//       .addCase(uploadImage.fulfilled, (state, action) => {
//         state.status=action.payload.status
//         state.message=action.payload.message
//       })
//       .addCase(uploadImage.rejected, (state, action) => {
//         state.status=action.payload.status
//         state.message=action.payload.message
//         state.error = action.payload.data;
//       })
    
//      ;
//   },
// });
// export const { resetStatusAndMessage } = studentSlice.actions;
// export default studentSlice.reducer;



// // export const searchStudentsByYear = createAsyncThunk('student/searchStudentsByYear',async ({ startYear, endYear }, thunkAPI) => {
// //   console.log(startYear)
// //     const url = `${BASE_URL}/student/search4?startYear=${startYear}&endYear=${endYear}`;
// //     try {
// //       const response = await axios.get(url);
// //       return response.data; // Trả về dữ liệu từ phản hồi
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.response.data); // Trả về lỗi nếu có
// //     }
// //   }
// // );
// // export const searchStudentsXepLoai = createAsyncThunk('student/searchStudentsXepLoai', async (xeploai, thunkAPI) => {
// //   const url = `${BASE_URL}/student/searchXepLoai`;
// //   try {
// //     const response = await axios.get(url, {
// //       params: { "xepLoai": xeploai },
// //     });
// //     return response.data;
// //   } catch (error) {
// //     return thunkAPI.rejectWithValue(error.response.data);
// //   }
// // });
// // export const search = createAsyncThunk('student/search', async ({xepLoai,ten,startYear,endYear}, thunkAPI) => {
// //   const url = `${BASE_URL}/student/search?xepLoai=${xepLoai}&ten=${ten}&startYear=${startYear}&endYear=${endYear}`;
// //   try {
// //     const response = await axios.get(url);
// //     return response.data;
// //   } catch (error) {
// //     return thunkAPI.rejectWithValue(error.response.data);
// //   }
// // });




import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import axiosInstance from "../utils/axiosInstance";

const initialState = {
    items: null,
    totalPage: 0,
    status: "start",
    errors: null,
    message: null,
}
const url = "http://localhost:8080/blog"

export const fetchBlogs = createAsyncThunk("blog/fetchBlogs", async (page, thunkAPI) => {
    try {
        const response = await axios.get(url, {
            params: {
                page: page,
                size: 6
            }
        })
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})


export const fetchBlogDetail = createAsyncThunk("blog/fetchBlogDetail", async (id, thunkAPI) => {
  try {
      const response = await axios.get(url + "/" + id)
      return response.data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
  }
})
export const blogSlice = createSlice({
    name: 'blog',
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
        .addCase(fetchBlogDetail.pending, (state)=>{
          state.status = "loading"
        })
        .addCase(fetchBlogs.pending, (state)=>{
          state.status = "loading"
        })
        .addCase(fetchBlogs.fulfilled,(state, action)=>{
          console.log(action)
            state.items = action.payload.data.blogList
            state.totalPage = action.payload.data.total_page
            state.status = action.payload.status
        })
        .addCase(fetchBlogs.rejected, (state, action)=>{
          console.log(action)
        })
        .addCase(fetchBlogDetail.fulfilled,(state, action) =>{
          state.items = action.payload.data
          console.log(action)
        })
        .addCase(fetchBlogDetail.rejected,(state, action)=>{
          console.log(action)
        })

    }
})
export const { removeMessageError} = blogSlice.actions
export default blogSlice.reducer 
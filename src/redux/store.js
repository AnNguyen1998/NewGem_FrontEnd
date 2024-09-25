import {configureStore} from '@reduxjs/toolkit'
import hotelSlice from './hotelSlice'
import blogSlice from './blogSlice'

export const store = configureStore({
    reducer:{
      hotel: hotelSlice,
      blog: blogSlice
    },
})
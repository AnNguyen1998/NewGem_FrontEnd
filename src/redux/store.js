import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import hotelSlice from './hotelSlice'

export const store = configureStore({
    reducer:{
      auth: authSlice,
      hotel: hotelSlice,
    },
})
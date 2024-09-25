import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import hotelSlice from './hotelSlice'
import roomSlice from './roomSlice'

export const store = configureStore({
    reducer:{
      auth: authSlice,
      hotel: hotelSlice,
      room: roomSlice
    },
})
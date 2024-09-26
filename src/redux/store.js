import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import hotelSlice from './hotelSlice'

import blogSlice from './blogSlice'

import roomSlice from './roomSlice'


export const store = configureStore({
    reducer:{
      auth: authSlice,
      hotel: hotelSlice,

      blog: blogSlice,

      room: roomSlice
    },
})
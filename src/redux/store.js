import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import hotelSlice from './hotelSlice'

import blogSlice from './blogSlice'

import roomSlice from './roomSlice'
import billSlice from './billSlice'


export const store = configureStore({
    reducer:{
      auth: authSlice,
      hotel: hotelSlice,
      blog: blogSlice,
      room: roomSlice,
      bill: billSlice
    },
})
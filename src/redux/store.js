import { configureStore } from '@reduxjs/toolkit'
import likeSliceReducer from './likeSlice'
export const store = configureStore({
  reducer: {
    likeId:likeSliceReducer,
  },
})


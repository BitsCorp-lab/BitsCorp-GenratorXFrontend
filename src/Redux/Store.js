import { configureStore } from '@reduxjs/toolkit'

import genratorXReducer from "./Slices/GenratorX/genratorXSlice"


export const Store =  configureStore({
  reducer: {
    
    genratorX: genratorXReducer
  }
})
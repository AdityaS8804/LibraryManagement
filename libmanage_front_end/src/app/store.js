import { configureStore } from '@reduxjs/toolkit'
import todoReduce from "../features/todo/todoSlice"
export const store = configureStore({
    reducer: {}
})
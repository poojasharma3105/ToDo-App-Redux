import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../../../redux-class-todo/src/features/todo/todoSlice";

export const store = configureStore({
    reducer: todoReducer,
});
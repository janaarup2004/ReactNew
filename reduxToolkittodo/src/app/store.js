import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer, // Ensure this matches the state selector in the component
    },
});

import { configureStore } from "@reduxjs/toolkit";
import darkMode from './slices/darkMode.slice'

export default configureStore({
    reducer:{
        darkMode
    }
})
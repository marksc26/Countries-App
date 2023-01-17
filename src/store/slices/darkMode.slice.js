import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name: "darkMode",
    initialState: JSON.parse(localStorage.getItem("darkMode")) || false,
    reducers:{
        setDarkModeGlobal: (state, action) => action.payload
    }
})

export const {setDarkModeGlobal} = darkModeSlice.actions
export default darkModeSlice.reducer
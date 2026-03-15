import { createSlice } from "@reduxjs/toolkit";

export const counterslice = createSlice({
    name: "auth",
    initialState: {
        loading: false
    },
    reducers: {
        changeloading: (state, action) => {
            state.loading = action.payload
        }
    }
})
export const { changeloading } = counterslice.actions
export default counterslice.reducer
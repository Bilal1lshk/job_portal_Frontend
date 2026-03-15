import { createSlice } from "@reduxjs/toolkit";
export const jobslice = createSlice({
    name: "job",
    initialState: {
        Alljobs: [],
        Singlejob: null
    },
    reducers: {
        setalljobs: (state, action) => {
            state.Alljobs = action.payload
        },
        setajob: (state, action) => {
            state.Singlejob = action.payload
        }
    }
})
export const { setalljobs, setajob } = jobslice.actions
export default jobslice.reducer
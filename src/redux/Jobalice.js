import { createSlice } from "@reduxjs/toolkit";
export const jobslice = createSlice({
    name: "job",
    initialState: {
        Alljobs: [],
        Singlejob: null,
        adminjobs: null
    },
    reducers: {
        setalljobs: (state, action) => {
            state.Alljobs = action.payload
        },
        setajob: (state, action) => {
            state.Singlejob = action.payload
        },
        setadminjobs: (state, action) => {
            state.adminjobs = action.payload
        }
        
    }
})
export const { setalljobs, setajob ,setadminjobs} = jobslice.actions
export default jobslice.reducer


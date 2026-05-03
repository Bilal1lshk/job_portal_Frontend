import { createSlice } from "@reduxjs/toolkit";

const filter = createSlice({
    name: "filervalue",
    initialState: {
        scroller: null
    },
    reducers: {
        setscrollervalue: (state, action) => {
            state.scroller = action.payload
        }
    }
})
export const { setscrollervalue } = filter.actions

export default filter.reducer
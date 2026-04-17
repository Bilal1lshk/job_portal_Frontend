import { createSlice } from "@reduxjs/toolkit";

const postslice = createSlice({
    name: "post",
    initialState: {
        allposts: null,
        singlepost: null
    },
    reducers: {
        Setallposts: (state, action) => {
            state.allposts = action.payload
        },
        SetSinglepost: (state, action) => {
            state.singlepost = action.payload
        },
    }
})
export const { Setallposts,SetSinglepost } = postslice.actions
export default postslice.reducer
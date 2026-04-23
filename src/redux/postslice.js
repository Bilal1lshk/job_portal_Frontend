import { createSlice } from "@reduxjs/toolkit";

const postslice = createSlice({
    name: "post",
    initialState: {
        allposts: null,
        singlepost: null,
        adminposts: null
    },
    reducers: {
        Setallposts: (state, action) => {
            state.allposts = action.payload
        },
        SetSinglepost: (state, action) => {
            state.singlepost = action.payload
        },
        SetAdminposts: (state, action) => {
            state.adminposts = action.payload
        }
    }
})
export const { Setallposts, SetSinglepost,SetAdminposts } = postslice.actions
export default postslice.reducer


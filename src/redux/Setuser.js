import { createSlice } from "@reduxjs/toolkit";

const Setuser = createSlice({
    name: "user",
    initialState: {
        user: false
    },
    reducers: {
        Setuservalue: (state, action) => {
            state.user = action.payload
            }
    }
})
export const { Setuservalue }=Setuser.actions
export default Setuser.reducer


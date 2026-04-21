import { createSlice } from "@reduxjs/toolkit";

const Setuser = createSlice({
    name: "user",
    initialState: {
        user: false
    },
    reducers: {
        Setuservalue: (state, action) => {
            console.log('Setuservalue called with payload:', action.payload)
            state.user = action.payload
            console.log('New state.user:', state.user)
        }
    }
})
export const { Setuservalue }=Setuser.actions
export default Setuser.reducer
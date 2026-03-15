import { createSlice } from "@reduxjs/toolkit";

const companyslice = createSlice({
    name: "campany",
    initialState: {
        Allcompany: null
    },
    reducers: {
        setallcompany: (state, action) => {
            state.Allcompany = action.payload
        }
    }
})
export const {setallcompany}=companyslice.actions
export default companyslice.reducer
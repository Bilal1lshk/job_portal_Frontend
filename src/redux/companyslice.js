import { createSlice } from "@reduxjs/toolkit";

const companyslice = createSlice({
    name: "campany",
    initialState: {
        Allcompany: null,
        singelcompany: null,
    },
    reducers: {
        setallcompany: (state, action) => {
            state.Allcompany = action.payload
        },
        setsinglecompany: (state, action) => {
            state.singelcompany = action.payload
        }
    }
})
export const { setallcompany, setsinglecompany } = companyslice.actions
export default companyslice.reducer
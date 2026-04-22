import { createSlice } from "@reduxjs/toolkit";
import Aplicationstaus from "../components/Aplicationstaus";

const Applicantslice = createSlice({
    name: "applicants",
    initialState: {
        applicantvalue: null,
        applicationsattus: null
    },
    reducers: {
        setaaplicantvalue: (state, action) => {
            state.applicantvalue = action.payload
        },
        allapplicationssatatus: (state, action) => {
            state.applicationsattus = action.payload

        }
    }
})
export const { setaaplicantvalue, allapplicationssatatus } = Applicantslice.actions
export default Applicantslice.reducer


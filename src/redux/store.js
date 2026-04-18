import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginslice from "./Loginslice.js"
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import Setuser from "./Setuser.js";

import jobslice from "./Jobalice.js";
import Applicantslice from "./Applicants.js";

import companyslice from "./companyslice.js";
import postslice from "./postslice.js";
import storage from "../Constants/sotrage.js";
const perssistconfig = {
    key: "root",
    storage
}
const rootReducer = combineReducers({
    auth: loginslice,
    Setuser: Setuser,
    jobdata: jobslice,
    company: companyslice,
    applicant:Applicantslice,
    postsdata:postslice
   
})
const persistedReducer = persistReducer(perssistconfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})


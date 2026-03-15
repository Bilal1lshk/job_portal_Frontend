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
import companyslice from "./companyslice.js";

import { localStorage } from 'redux-persist/lib/storage'
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


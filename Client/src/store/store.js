import { configureStore } from "@reduxjs/toolkit";


import authSlice from "./AuthSlice/authSlice";
import ProjectsSlice from "./ProjectsSlice/ProjectsSlice"
import FilterSlice from "./ProjectsSlice/FilteringSlice"
export const store = configureStore({
    reducer:{
        authSlice,
        ProjectsSlice,
        FilterSlice
    }
})


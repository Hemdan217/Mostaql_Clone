import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
    name: "ProjectFilter",
    initialState: {
        page: 1,
        limit: 5,
        keyword: '',
        skillsIds: [],
        categoryId: '',
        range_lt: 0,
        range_gt: 0
    },
    reducers: {
        setFilteringObj: (state, action) => {
            return state 
        }
    }
})

export const { setFilteringObj } = FilterSlice.actions
export default FilterSlice.reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { store } from "../store";

export const getAllProjects = createAsyncThunk(
  "projectFullData/getProjects",
  async ({
    sort,
    page,
    limit,
    keyword,
    select,
    categoryIds,
    categoryId,
    range_lt,
    range_gt,
    skillsIds,
  }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/projects/open`,
        {
          params: {
            page,
            sort,
            limit,
            keyword,
            select,
            range_lt,
            range_gt,
            categoryId,
            categoryIds,
            skillsIds,
            lang: localStorage.getItem("lang"),
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addingNewProject = createAsyncThunk(
  "projectFullData/addProject",
  async ({ fd }) => {
    try {
      let { authSlice } = store.getState();

      fd.append('clientId', authSlice.userData.id)
    

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/projects`,
        fd,
        {
          headers: {
            Authorization: JSON.parse(localStorage.getItem("isAuth")).token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data
    } catch (error) {
      console.log(error);
    }
  }
);

const ProjectsSlice = createSlice({
  name: "projectFullData",
  initialState: {
    projects: [],
    paginationData: {},
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProjects.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(getAllProjects.fulfilled, (state, action) => {
      state.isLoading = false;
      state.projects = action.payload.resultProjects;
      state.paginationData = action.payload.pagination;
      // console.log(action)
    });

    builder.addCase(getAllProjects.rejected, (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
    });
  },
});

export const { setFilterObj } = ProjectsSlice.actions;

export default ProjectsSlice.reducer;

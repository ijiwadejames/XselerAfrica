/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import workExperienceService from "./workExperienceService";

const initialState = {
  works: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const addExperience = createAsyncThunk(
  "work/add",
  async (formData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await workExperienceService.addExperience(formData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateExperience = createAsyncThunk(
  "work/update",
  async (formData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await workExperienceService.updateExperience(formData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getExperience = createAsyncThunk(
  "work/get",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await workExperienceService.getExperience(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const delExperience = createAsyncThunk(
  "work/del",
  async (formData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await workExperienceService.delExperience(formData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const workExperienceSlice = createSlice({
  name: "work",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(addExperience.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addExperience.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.works = action.payload;
      })
      .addCase(addExperience.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getExperience.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getExperience.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.works = action.payload;
      })
      .addCase(getExperience.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateExperience.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateExperience.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.works = action.payload;
      })
      .addCase(updateExperience.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(delExperience.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(delExperience.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.works = state.works.filter(
          (val) => val.orgCode !== action.payload.orgCode
        );
      })
      .addCase(delExperience.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = workExperienceSlice.actions;
export default workExperienceSlice.reducer;

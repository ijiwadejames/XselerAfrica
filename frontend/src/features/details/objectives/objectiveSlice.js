/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import objectiveService from "./objectiveService";

const initialState = {
  objectives: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const createObjective = createAsyncThunk(
  "objective/create",
  async (formData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await objectiveService.createObjective(formData, token);
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

export const updateObjective = createAsyncThunk(
  "objective/update",
  async (formData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await objectiveService.updateObjective(formData, token);
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

export const getObjective = createAsyncThunk(
  "objective/get",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await objectiveService.getObjective(token);
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

export const deleteObjective = createAsyncThunk(
  "objective/delete",
  async (formData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await objectiveService.deleteObjective(formData, token);
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
export const objectiveSlice = createSlice({
  name: "objective",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(createObjective.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createObjective.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.objectives = action.payload;
      })
      .addCase(createObjective.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateObjective.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateObjective.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.objectives = action.payload;
      })
      .addCase(updateObjective.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getObjective.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getObjective.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.objectives = action.payload;
      })
      .addCase(getObjective.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteObjective.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteObjective.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.objectives = state.objectives.filter(
          (val) => val.objCode !== action.payload.objCode
        );
      })
      .addCase(deleteObjective.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = objectiveSlice.actions;
export default objectiveSlice.reducer;

/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import personalService from "./personalService";

const initialState = {
  details: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const newDetails = createAsyncThunk(
  "details/create",
  async (formData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await personalService.newDetails(formData, token);
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

// Get personal details
export const getDetails = createAsyncThunk(
  "details/get",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await personalService.getDetails(token);
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

export const updateDetails = createAsyncThunk(
  "details/update",
  async (formData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await personalService.updateDetails(formData, token);
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

export const personlDetailsSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(newDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(newDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.details = action.payload;
      })
      .addCase(newDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.details = action.payload;
      })
      .addCase(getDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.details = action.payload;
      })
      .addCase(updateDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = personlDetailsSlice.actions;
export default personlDetailsSlice.reducer;

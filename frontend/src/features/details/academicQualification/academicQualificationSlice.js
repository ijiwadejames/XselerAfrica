/** @format */

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newQualificationService from "./academicQualificationService";

const initialState = {
  qualifications: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const newQualification = createAsyncThunk(
  "qualification/create",
  async (formData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await newQualificationService.newQualification(formData, token);
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

export const getQualification = createAsyncThunk(
  "qualification/get",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await newQualificationService.getQualification(token);
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

export const updateQualification = createAsyncThunk(
  "qualification/update",
  async (formData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await newQualificationService.updateQualification(formData, token);
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

export const delQual = createAsyncThunk(
  "qualification/delete",
  async (formData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await newQualificationService.delQual(formData, token);
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
export const newQualificationSlice = createSlice({
  name: "qualification",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(newQualification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(newQualification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.qualifications.push(action.payload);
      })
      .addCase(newQualification.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getQualification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQualification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.qualifications = action.payload;
      })
      .addCase(getQualification.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateQualification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateQualification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const updatedArrayItem = action.payload;
        updatedArrayItem.forEach((updatedItem) => {
          const index = state.qualifications.findIndex(
            (item) => item.id === updatedItem.id
          );
          if (index !== -1) {
            state.qualifications[index] = updatedItem;
          } else {
            state.qualifications.push(updatedItem);
          }
        });
      })
      .addCase(updateQualification.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(delQual.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(delQual.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.qualifications = state.qualifications.filter(
          (qual) => qual._id !== !action.payload.id
        );
      })
      .addCase(delQual.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = newQualificationSlice.actions;
export default newQualificationSlice.reducer;

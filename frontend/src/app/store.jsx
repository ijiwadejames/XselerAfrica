/** @format */

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import personalReducer from "../features/details/personal/personalSlice";
import qualificationReducer from "../features/details/academicQualification/academicQualificationSlice";
import workReducer from "../features/details/workExperience/workExperienceSlice";
import objectiveReducer from "../features/details/objectives/objectiveSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    details: personalReducer,
    qualifications: qualificationReducer,
    works: workReducer,
    objectives: objectiveReducer,
  },
});

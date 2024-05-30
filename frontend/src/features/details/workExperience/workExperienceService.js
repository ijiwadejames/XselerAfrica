/** @format */

import axios from "axios";

const API_URL = "http://localhost:5000/api/details/";

const addExperience = async (formData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    API_URL + "work-experience",
    formData,
    config
  );

  return response.data;
  // return Array.isArray(response.data) ? response.data : [response.data];
};

const getExperience = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "get-experience", config);

  return response.data;
};

const updateExperience = async (formData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    API_URL + "update-work-experience",
    formData,
    config
  );

  return response.data;
};

const delExperience = async (formData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    API_URL + "delete-work-experience",
    formData,
    config
  );

  return response.data;
};
const workExperienceService = {
  addExperience,
  updateExperience,
  delExperience,
  getExperience,
};

export default workExperienceService;

/** @format */

import axios from "axios";

const API_URL = "http://localhost:5000/api/details/";

const createObjective = async (formData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    API_URL + "career-objective",
    formData,
    config
  );

  return response.data;
};

const getObjective = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "get-career-objective", config);

  return response.data;
};

const updateObjective = async (formData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    API_URL + "update-career-objective",
    formData,
    config
  );

  return response.data;
};

const deleteObjective = async (formData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    API_URL + "delete-career-objective",
    formData,
    config
  );

  return response.data;
};
const objectiveService = {
  createObjective,
  updateObjective,
  getObjective,
  deleteObjective,
};

export default objectiveService;

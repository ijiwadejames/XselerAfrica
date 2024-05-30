/** @format */

import axios from "axios";

const API_URL = "http://localhost:5000/api/details/";

//create personal details
const newQualification = async (formData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    API_URL + "academic-qualification",
    formData,
    config
  );

  return response.data;
};

const updateQualification = async (formData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    API_URL + "update-academic-qualification",
    formData,
    config
  );

  return response.data;
};

const getQualification = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "get-qualification", config);

  return response.data;
};

const delQual = async (formData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    API_URL + "delete-academic-qualification",
    formData,
    config
  );

  return response.data;
};

const academicQualificationService = {
  newQualification,
  updateQualification,
  getQualification,
  delQual,
};

export default academicQualificationService;

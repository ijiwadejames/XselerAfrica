/** @format */

import axios from "axios";

const API_URL = "http://localhost:5000/api/details/";

//create personal details
const newDetails = async (formData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    API_URL + "personal-details",
    formData,
    config
  );

  return response.data;
};

// Get personal details
const getDetails = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "getMe", config);

  return response.data;
};

//update personal details
const updateDetails = async (formData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(
    API_URL + "update-personal-details/",
    formData,
    config
  );
  return response.data;
};
const personalService = {
  newDetails,
  getDetails,
  updateDetails,
};

export default personalService;

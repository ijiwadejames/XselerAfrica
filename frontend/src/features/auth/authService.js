/** @format */

import axios from "axios";
import Cookies from "js-cookie";
const API_URL = "http://localhost:5000/api/user/";

//Register User
const register = async (formData) => {
  const response = await axios.post(API_URL + "register", formData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (formData) => {
  const response = await axios.post(API_URL, formData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;

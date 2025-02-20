import axios from "axios";

const API_URL = "http://localhost:5000/api/auth"; 

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    return { success: false, message: error.response?.data?.message || "Registration failed" };
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
    return response.data;
  } catch (error) {
    return { success: false, message: error.response?.data?.message || "Login failed" };
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

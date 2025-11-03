import axios from "axios";

// TODO: Replace with your Streamlit backend URL
const instance = axios.create({
  baseURL: "http://localhost:8501", // Default Streamlit port
});

export default instance;

import axios from "axios";

const axiosConfig = {
  withCredentials: true,
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    common: {
      "X-Requested-With": "XMLHttpRequest",
    },
  },
};

export default axios.create(axiosConfig);

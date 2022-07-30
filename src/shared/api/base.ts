import axios from "axios";

const baseURL =
  process.env.REACT_APP_MAIN_URL_BACKEND || "http://192.168.1.107:5001";

console.log(process.env.REACT_APP_MAIN_URL_BACKEND);

const apiInstance = axios.create({
  baseURL,
});

apiInstance.interceptors.request.use(
  async (config) => {
    config.baseURL = baseURL;

    config.headers = {
      Accept: "application/json",
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export { apiInstance };

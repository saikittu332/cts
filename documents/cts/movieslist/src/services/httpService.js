import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedErrors) {
    toast("unknown error");
    // toast.error()
  }
  alert("failed to delete due to unknown error");
  return Promise.reject(error); //returns promise
});

export default {
  get: axios.get,
  post: axios.get,
  put: axios.put,
  delete: axios.delete
};

import axios from "axios";
import { API_URL, AUTH_URL, LOGIN_URL, SAVE_URL } from "../../Constants";

export class AuthService {
  setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  loadUser = (token) => {
    const config = {
      method: "get",
      url: `${API_URL}${AUTH_URL}`,
      headers: { "Content-Type": "application/json", Authorization: token },
    };
    return axios(config);
  };

  login = (payload) => {
    console.log("inside auth services");
    const config = {
      method: "post",
      url: `${API_URL}${LOGIN_URL}`,
      headers: { "Content-Type": "application/json" },
      data: payload,
    };
    return axios(config);
  };

  saveUser = (payload) => {
    const config = {
      method: "post",
      url: `${API_URL}${SAVE_URL}`,
      headers: { "Content-Type": "application/json" },
      data: payload,
    };
    return axios(config);
  };
}

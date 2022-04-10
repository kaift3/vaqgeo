import { useContext, useReducer, createContext } from "react";
import axios from "axios";
import { AuthService } from "../../Services/AuthService.js";
import AuthReducer from "../Reducer/AuthReducer.js";
import { API_URL, AUTH_URL, LOGIN_URL, SAVE_URL } from "../../../Constants.js";

const initialState = { isAuthenticated: false, user: null, loading: false };

export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const setLoading = (loading) => {
    dispatch({
      type: "SET_LOADING",
      payload: loading,
    });
  };

  const loadUser = () => {
    if (localStorage.getItem("user")) {
      console.log("inside loaduser if");
      let token = "Bearer " + JSON.parse(localStorage.getItem("user")).token;
      axios
        .get(`${API_URL}${AUTH_URL}`, {
          headers: { Authorization: token },
        })
        .then((response) => {
          console.log("inside response");
          dispatch({
            type: "LOAD_USER",
            payload: response.data,
          });
        })
        .catch((error) => {
          if (error.response) {
            dispatch({
              type: "AUTH_ERROR",
            });
          }
        });
    } else {
      dispatch({
        type: "AUTH_ERROR",
      });
    }
  };

  const login = (email, password) => {
    setLoading(true);
    //console.log("inside login auth context");
    const payload = { email: email, password: password };
    return axios.post(`${API_URL}${LOGIN_URL}`, payload);
    // .then((response) => {
    //   dispatch({
    //     type: "LOGIN_SUCCESS",
    //     payload: response.data,
    //   });
    // })
    // .catch((error) => {
    //   if (error.response) {
    //     dispatch({
    //       type: "LOGIN_FAILED",
    //     });
    //   }
    // });
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  const saveUser = (email, password, name) => {
    setLoading(true);
    const payload = {
      email: email,
      password: password,
      name: name,
    };
    return axios.post(`${API_URL}${SAVE_URL}`, payload);

    // .then((response) => {
    //   dispatch({
    //     type: "SAVE_SUCCESS",
    //   });
    //   console.log(response.data.message);
    //   return response.data.message;
    // })
    // .catch((error) => {
    //   if (error.response) {
    //     dispatch({
    //       type: "SAVE_FAILED",
    //     });
    //   }
    // });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        setLoading,
        loadUser,
        login,
        saveUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

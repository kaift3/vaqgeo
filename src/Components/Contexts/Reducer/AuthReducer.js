const AuthReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "SAVE_FAILED":
    case "SAVE_SUCCESS":
      return {
        ...state,
        loading: false,
      };

    case "LOGIN_SUCCESS":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload,
        loading: false,
        isAuthenticated: true,
      };

    case "LOAD_USER":
      let tempUser = JSON.parse(localStorage.getItem("user"));
      tempUser.username = action.payload.username;
      tempUser.designation = action.payload.designation;
      localStorage.setItem("user", JSON.stringify(tempUser));
      return {
        ...state,
        user: action.payload,
        loading: false,
        isAuthenticated: true,
      };

    case "LOGOUT":
    case "AUTH_ERROR":
    case "LOGIN_FAILED":
      localStorage.removeItem("user");
      return {
        ...state,
        user: null,
        loading: false,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default AuthReducer;

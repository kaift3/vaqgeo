import React, { useContext, useState } from "react";
import Container from "@material-ui/core/Container";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Contexts/Context/AuthContext";

export default function SignIn() {
  const { login, isAuthenticated } = useContext(AuthContext);

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    login(state.username, state.password);
  };

  if (localStorage.getItem("user")) {
    return <Navigate to="/home" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      {isAuthenticated.toString()}
      <br />
      {state.username + " " + state.password}
      <div class="mb-3">
        <label for="username" class="form-label">
          Email address
        </label>
        <input
          type="username"
          class="form-control"
          id="username"
          value={state.username}
          onChange={handleChange}
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          value={state.password}
          onChange={handleChange}
          id="password"
        />
      </div>

      <button class="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
      <br />
      {/* <button class="btn btn-primary" onClick={logout}>
        Logout
      </button> */}
    </Container>
  );
}

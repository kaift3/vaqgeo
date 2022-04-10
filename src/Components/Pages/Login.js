import React, { useContext, useState } from "react";
import Container from "@material-ui/core/Container";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../Contexts/Context/AuthContext";
import CustomInput from "../UI/CustomInput";
import "./Login.css";

export default function SignIn() {
  const { login, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setState((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value, //object keeps updating as we keep typing
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    login(state.email, state.password).then((response) => {
      console.log(response);
      if (response.data.message === "Login Successful") {
        navigate("/home");
        isAuthenticated = true;
      } else {
        alert(response.data.message);
      }
    });
    console.log(state);
  };

  // if (localStorage.getItem("user")) {
  //   return <Navigate replace to="/home" />;
  // }

  return (
    <>
      {/* {isAuthenticated.toString()}
        <br />
        {state.email + " " + state.password}
        <div class="mb-3">
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            value={state.email}
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
        <br /> */}
      {/* <button class="btn btn-primary" onClick={logout}>
        Logout
      </button> */}
      {/* <div id="emailHelp" class="form-text">
          Don't have an account? Sign Up <Link to="/signup">here</Link>
        </div> */}
      <section class="vh-auto wh-auto gradient-custom">
        <div class="container py-5 h-80">
          <div class="row d-flex justify-content-center align-items-center h-auto w-auto">
            <div class="col-12 col-md-8 col-lg-6 col-xl-4">
              <div class="black-card card bg-dark text-white">
                <div class="card-body p-5 text-center">
                  <div class="mb-md-5 my-4 pb-5">
                    <h2 class="form-title fw-bold mb-2 text-uppercase">
                      Login
                    </h2>
                    <p class="text-white-50 mb-5">
                      Please enter your credentials
                    </p>

                    <div class="form-outline mb-2">
                      {/* <h6>
                        <label class="form-label" for="password">
                          Email
                        </label>
                      </h6> */}
                      <CustomInput
                        type="email"
                        labelText="Email"
                        class="form-control form-control-lg mb-4 "
                        id="email"
                        value={state.email}
                        handleChange={handleChange}
                        aria-describedby="emailHelp"
                        autoFocus="true"
                      />
                    </div>

                    <div class="form-outline form-white mb-5">
                      {/* <h6>
                        <label class="form-label" for="password">
                          Password
                        </label>
                      </h6> */}
                      <CustomInput
                        type="password"
                        labelText="Password"
                        class="form-control form-control-lg mb-5"
                        value={state.password}
                        handleChange={handleChange}
                        id="password"
                        autoFocus="true"
                      />
                    </div>

                    <button
                      class="btn btn-outline-light btn-lg px-5 mt-3"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Login
                    </button>
                  </div>

                  <div>
                    <div id="emailHelp" class="form-text">
                      Don't have an account? Sign Up{" "}
                      <Link to="/signup">here</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- */}
    </>
  );
}

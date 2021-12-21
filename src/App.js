import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyRoutes from "./Components/Layout/Routes";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "react-bootstrap";
import { AuthContext } from "./Components/Contexts/Context/AuthContext";
import jwt from "jsonwebtoken";
import { AuthService } from "./Components/Services/AuthService";
import PrivateRoute from "./Components/Routes/PrivateRoute";
import PublicRoute from "./Components/Routes/PublicRoute";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Home from "./Components/Pages/Home";
import Services from "./Components/Pages/Services.js";
import Navbar from "./Components/Navbar.js";
import Login from "./Components/Pages/Login.js";

function App() {
  const theme = createTheme();
  const { loadUser, logout } = useContext(AuthContext);
  if (localStorage.getItem("user")) {
    AuthService.setAuthToken(JSON.parse(localStorage.getItem("user")).token);
    jwt.verify(
      JSON.parse(localStorage.getItem("user")).token,
      "secret",
      (error, decode) => {
        if (error) {
          logout();
        }
        // if (decode !== JSON.parse(localStorage.getItem("user")).username) {
        //   logout();
        // }
      }
    );
  }

  useEffect(() => {
    if (localStorage.getItem("user")) {
      console.log("inside load user");
      loadUser();
    }
  }, []);

  return (
    <>
      {/* <AuthProvider> */}
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <>
              {/* {window.location.pathname !== "/login" && <Navbar />} */}
              <Navbar />
              <Routes>
                <Route
                  path="/home"
                  exact
                  element={
                    <PrivateRoute>
                      <Home />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/about"
                  exact
                  element={
                    <PrivateRoute>
                      <About />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/services"
                  exact
                  element={
                    <PrivateRoute>
                      <Services />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/contact"
                  exact
                  element={
                    <PrivateRoute>
                      <Contact />
                    </PrivateRoute>
                  }
                />

                <Route
                  path="/login"
                  exact
                  element={
                    <PublicRoute>
                      <Login />
                    </PublicRoute>
                  }
                />

                {/* <Route path="/signup" exact element={<SignUp/>}/> */}

                <Route
                  path="*"
                  exact
                  element={
                    <PrivateRoute>
                      <Home />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </>
          </Router>
        </div>
      </ThemeProvider>
      {/* </AuthProvider> */}
    </>
  );
}

export default App;

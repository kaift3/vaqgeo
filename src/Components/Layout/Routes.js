import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import PrivateRoute from "../Routes/PrivateRoute";
import PublicRoute from "../Routes/PublicRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Services from "../Pages/Services.js";
import Navbar from "../Navbar.js";
import Login from "../Pages/Login.js";
//import SignUp from '../Pages/SignUp.js'

const MyRoutes = () => {
  // const navigate = useNavigate()
  // React.useEffect(()=>{
  //    navigate("/login")
  // },[])

  return (
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
  );
};

export default MyRoutes;

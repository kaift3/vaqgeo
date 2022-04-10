import React, { useState, useContext } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { AuthContext } from "./Contexts/Context/AuthContext";
import { dropdownItems } from "./NavItems";
import { Link } from "react-router-dom";
const MyNavbar = () => {
  //const [dropdown, setDropdown] = useState(false);
  // const [click, setClick] = useState(false)

  const { logout, isAuthenticated } = useContext(AuthContext);

  const navLinks = (
    <>
      <Nav className=" navbar-collapse ms-5">
        <ul class="navbar-nav mr-auto">
          <Nav.Link href="/home" className="nav-item ms-4 fs-5">
            Home
          </Nav.Link>
          <Nav.Link href="/about" className="nav-item ms-4 fs-5">
            About
          </Nav.Link>

          {/* <NavDropdown
            menuVariant="dark"
            className="nav-item ms-4 fs-5"
            title="Navigation" //title
            id="basic-nav-dropdown"
          > */}
          {/* <NavDropdown.Item href="/home">Home</NavDropdown.Item>
      <NavDropdown.Item href="/about">About</NavDropdown.Item> */}
          {/* {dropdownItems.map((item) => {
              return (
                <NavDropdown.Item href={item.path} className="fs-5">
                  {item.title}
                </NavDropdown.Item>
              );
            })}
            <NavDropdown.Divider />
            <NavDropdown.Item href="/contact" className="fs-5">
              Hello
            </NavDropdown.Item>
          </NavDropdown> */}
          <NavDropdown
            menuVariant="dark"
            className="nav-item ms-4 fs-5"
            title="Services"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1" className="fs-5">
              GeoTag
            </NavDropdown.Item>
            <NavDropdown.Item href="/mymap" className="fs-5">
              GeoFence
            </NavDropdown.Item>

            <NavDropdown.Item href="#action/3.4" className="fs-5">
              Routes
            </NavDropdown.Item>
          </NavDropdown>
        </ul>
        <div>
          <p id="userName"></p>
        </div>
        <form class="form-inline ">
          <button
            type="button"
            class="btn btn-outline-light float-right my-2 my-sm-0"
            onClick={logout}
          >
            Sign Out
          </button>
        </form>
      </Nav>
    </>
  );

  return (
    <>
      <div className="">
        <Navbar
          className="navbar navbar-expand-lg navbar-dark bg-dark "
          variant="dark"
          bg="dark"
          expand="lg"
        >
          <Navbar.Brand className="fs-2 fw-bold text-white ms-3" href="/home">
            GIS Application
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            {isAuthenticated ? navLinks : null}
            {navLinks}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default MyNavbar;

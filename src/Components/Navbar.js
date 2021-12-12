import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import {dropdownItems} from './NavItems'

const MyNavbar = () => {
  //const [dropdown, setDropdown] = useState(false);
  // const [click, setClick] = useState(false)

  return (
    <div className="" style={{width:"100vw"}}>
      <Navbar className="" variant="dark" bg="dark" expand="lg">
        
          <Navbar.Brand className="fs-2 fw-bold text-white ms-5" href="/home">GIS Application</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="ms-5">
              <Nav.Link href="/home" className="ms-2 fs-5">Home</Nav.Link>
              <Nav.Link href="/about" className=" ms-2 fs-5">About</Nav.Link>

              <NavDropdown menuVariant="dark" className="ms-2 fs-5" title="Navigation" id="basic-nav-dropdown">
                {/* <NavDropdown.Item href="/home">Home</NavDropdown.Item>
                <NavDropdown.Item href="/about">About</NavDropdown.Item> */}
                {dropdownItems.map((item)=>{
                  return(
                    <NavDropdown.Item href={item.path} className="fs-5">{item.title}</NavDropdown.Item>
                  )
                })}
                <NavDropdown.Divider />
                <NavDropdown.Item href="/contact" className="fs-5">Hello</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown menuVariant="dark" className="ms-2 fs-5" title="OpenLayer" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" className="fs-5">Location</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="fs-5">Distance</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" className="fs-5">Map</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
            <button type="button" class="btn btn-outline-light">Sign Out</button>
      </Navbar>
    </div>
  );
};

export default MyNavbar;

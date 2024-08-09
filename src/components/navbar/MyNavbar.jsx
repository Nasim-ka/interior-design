import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, Link, useLocation } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import Footer from "../footer/Footer";
import { useState } from "react";
import { NavLink } from "react-router-dom";
{/* <LuMenu />; */}
const MyNavbar = () => {
 
  return (
    <>
      <Navbar collapseOnSelect 
         expand="lg" className="bg-dark z-3 text-sm-large text-md-medium" fixed="top">
        <Container>
          <Navbar.Brand eventKey="#" className="textgreen fs-2 chic">
            Chic
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <LuMenu/>
          </Navbar.Toggle >
          <Navbar.Collapse  className="iconwhite" id="responsive-navbar-nav"  >
            <Nav
             variant="underline" defaultActiveKey="/home"
              className="ms-auto my-2 my-lg-0 text-sm-large text-md-medium"
              style={{ maxHeight: "100px" }}
              responsive-navbar-nav
              
            >
             
              <Nav.Link href="/home" className="me-4" >
                <Link to="/" >
                  <span>Home</span>{" "}
                </Link>
              </Nav.Link>
             
              <Nav.Link eventKey="about" className="me-4">
                <Link to="/about">
                  <span>About</span>
                </Link>
              </Nav.Link>
             
              <Nav.Link eventKey="services" className="me-4">
                <Link to="/services">
                  <span>Services</span>
                </Link>
              </Nav.Link>
             
              <Nav.Link eventKey="poroduct" className="me-4">
                <Link to="/portfolio">
                  <span>Products</span>{" "}
                </Link>
              </Nav.Link>
             
              <Nav.Link eventKey="team" className="me-4">
                <Link to="/team">
                  <span>Team</span>
                </Link>
              </Nav.Link>
             
              <Nav.Link eventKey="contact" className="me-4">
                <Link to="/contact">
                  <span>Contact</span>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Footer />
    </>
  );
};
export default MyNavbar;

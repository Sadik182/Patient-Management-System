import { faRegistered, faSignIn, faSignInAlt, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SR</Navbar.Brand>
          <nav className="ms-auto navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/view">View</Link>
            <Link to="/insert">Add Patient</Link>
          </nav>
        </Container>
        <Link to="/login">
           <FontAwesomeIcon icon={faSignIn} size='lg' title='Login'/> 
        </Link>
        <Link to="/register">
          <FontAwesomeIcon icon={faUserPlus} size="lg" title="Register"/> 
        </Link>
      </Navbar>
    </div>
  );
};

export default Header;

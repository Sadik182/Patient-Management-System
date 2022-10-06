import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <nav className="ms-auto navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/view">View</Link>
            <Link to="/insert">Add Patient</Link>
          </nav>
        </Container>
        <Link to="/login">
          <Button variant="outline-secondary">Login</Button>
        </Link>
        <Link to="/register">
          <Button variant="outline-secondary">Register</Button>
        </Link>
      </Navbar>
    </div>
  );
};

export default Header;

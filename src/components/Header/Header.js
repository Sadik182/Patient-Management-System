import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <nav className="ms-auto navbar">
            <Link to="/">Home</Link>
            <Link to="/view">View</Link>
            <Link to="/insert">Add Patient</Link>
            <Link to="/search">Search Patient</Link>
            <Link to="/report">Report</Link>
          </nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

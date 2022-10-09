import {
  faRegistered,
  faSignIn,
  faSignInAlt,
  faSignOut,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase/firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  
  const logOut = () => {
    signOut(auth);
  }
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SR</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <nav className="ms-auto navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/view">View</Link>
            <Link to="/insert">Add Patient</Link>
          </nav>
        </Navbar.Collapse>
        </Container>
        {user ? (
           <Link to="/home" className="fs-5">
           <FontAwesomeIcon icon={faSignOut} size="lg" title="Log Out" onClick={logOut}/>
         </Link>
         
        ) : (
          <Link to="/login">
            <FontAwesomeIcon icon={faSignIn} size="lg" title="Login" />
          </Link>
        )}
        <Link to="/register">
          <FontAwesomeIcon icon={faUserPlus} size="lg" title="Register" />
        </Link>
      </Navbar>
    </div>
  );
};

export default Header;

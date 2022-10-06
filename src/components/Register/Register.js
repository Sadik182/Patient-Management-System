import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h2 className="my-3">If You Don't Have an Account Please Register</h2>
      <Form className="login_form">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="form-label">Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Full Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="form-label">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Your Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="outline-primary" className="me-3">
          Google Login
        </Button>
        <Button variant="outline-primary">Facebook Login </Button>
        <p>
          Already have an account? <Link to="/login">Login</Link>{" "}
        </p>
        <Button variant="primary" type="submit" size="lg">
          Register <FontAwesomeIcon icon={faUserPlus} />
        </Button>
      </Form>
    </div>
  );
};

export default Register;

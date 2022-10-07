import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../firebase/firebase.init";

const Register = () => {
  const navigate = useNavigate()
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');

  const handleRegister = event => {
    event.preventDefault();
    const fullName = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if(password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
    }
  }
  if(user) {
    navigate('/login');
  }
  return (
    <div>
      <h2 className="my-3">If You Don't Have an Account Please Register</h2>
      <Form onSubmit={handleRegister} className="login_form">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="form-label">Full Name</Form.Label>
          <Form.Control ref={nameRef} type="text" placeholder="Enter Your Full Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="form-label">Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter Your Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Enter Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="primary" type="submit" size="lg">
          Register <FontAwesomeIcon icon={faUserPlus} />
        </Button>
        <p>
          Already have an account? <Link to="/login">Login</Link>{" "}
        </p>
        <div>------------OR------------</div>
        <Button variant="outline-primary" className="me-3">
          Google Login
        </Button>
        <Button variant="outline-primary">Facebook Login </Button>
      </Form>
    </div>
  );
};

export default Register;

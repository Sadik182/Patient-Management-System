import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.init";
import "./Login.css";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword,emailUser, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, GoogleUser] = useSignInWithGoogle(auth);

  const from = location.state?.from?.pathname || "/";
  const GoogleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithGoogle(email, password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };
  if (GoogleUser) {
    navigate(from, { replace: true });
  }
  if (emailUser) {
    navigate(from, { replace: true });
  }
  return (
    <div className="login_form">
      <h2 className="my-3">If You Have an Account Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="form-label">Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter Your Email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Enter Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" size="lg">
          Login <FontAwesomeIcon icon={faSignIn} />
        </Button>
        <p>
          Don't have an account? <Link to="/register">Create an Account</Link>{" "}
        </p>
        <div>-----------OR-------------</div>
      </Form>
      <Button variant="outline-primary" className="me-3" onClick={GoogleLogin}>
        Google Login
      </Button>
      <Button variant="outline-primary">Facebook Login </Button>
    </div>
  );
};

export default Login;

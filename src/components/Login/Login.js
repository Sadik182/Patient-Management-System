import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.init";
import './Login.css'

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate()
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleLogin = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password)

  }
  if(user) {
    navigate('/home');
  }
  return (
    <div>
        <h2 className='my-3'>If You Have an Account Please Login</h2>
      <Form onSubmit={handleLogin} className="login_form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='form-label'>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter Your Email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Enter Password" />
        </Form.Group>
        <Button variant="primary" type="submit" size='lg'>
          Login <FontAwesomeIcon icon={faSignIn} />
        </Button>
        <p>Don't have an account? <Link to='/register'>Create an Account</Link>  </p>
        <div>-----------OR-------------</div>
        <Button variant="outline-primary" className="me-3">Google Login</Button> 
        <Button variant='outline-primary'>Facebook Login </Button>
      </Form>
    </div>
  );
};

export default Login;

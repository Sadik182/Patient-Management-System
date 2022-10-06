import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
  return (
    <div>
        <h2 className='my-3'>If You Have an Account Please Login</h2>
      <Form className="login_form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='form-label'>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Your Email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
        <Button variant="outline-primary" className="me-3">Google Login</Button> 
        <Button variant='outline-primary'>Facebook Login </Button>
        <p>Don't have an account? <Link to='/register'>Create Account</Link>  </p>
        <Button variant="primary" type="submit" size='lg'>
          Login <FontAwesomeIcon icon={faSignIn} />
        </Button>
      </Form>
    </div>
  );
};

export default Login;

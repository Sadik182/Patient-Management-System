import React from "react";
import { Button, Form } from "react-bootstrap";
import './AddPatient.css'

const Add_Patient = () => {
  return (
    <Form className="form-container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Patient Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Patient Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Disece</Form.Label>
        <Form.Control type="text" placeholder="Enter Disece" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>Contact</Form.Label>
        <Form.Control type="text" placeholder="Enter Patient Name" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Add_Patient;

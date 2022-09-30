import React from "react";
import { Button, Form } from "react-bootstrap";
import './AddPatient.css'

const Add_Patient = () => {
  return (
    <Form className="form-container">
      <h1>Add Patient Information</h1>
      <Form.Group className="mb-3" controlId="">
        <Form.Control type="text" placeholder="Enter Patient Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Control type="text" placeholder="Enter Disece" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Control type="text" placeholder="Enter Address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Control type="text" placeholder="Enter Contact Number" />
      </Form.Group>

      <Button className="w-100" variant="primary" size="lg"  type="submit">
        Submit
      </Button>
      

    </Form>
  );
};

export default Add_Patient;

import React from "react";
import "./View.css";
import { Button, Form, InputGroup, Table } from "react-bootstrap";

const View = () => {
  return (
    <>
      <div className="search_box">
      <InputGroup className="mt-3">
        <Form.Control
          placeholder="Search Patient"
          aria-label="Search Patient"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
      </div>
      <Table striped bordered hover className="t-body">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>Disecse</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Fivver</td>
            <td>01715925172</td>
            <td>
              <Button variant="outline" className="text-primary fw-bold">
                Update
              </Button>{" "}
              {"|"}
              <Button variant="outline" className="text-danger fw-bold">Delete</Button> {"|"}
              <Button variant="outline" className="text-success fw-bold">Print</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Dark </td>
            <td>Arssdfr</td>
            <td>01715925172</td>
            <td>
              <Button variant="outline" className="text-primary fw-bold">
                Update
              </Button>{" "}
              {"|"}
              <Button variant="outline" className="text-danger fw-bold">Delete</Button> {"|"}
              <Button variant="outline" className="text-success fw-bold">Print</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Jark</td>
            <td>Srsdfer</td>
            <td>01715925172</td>
            <td>
              <Button variant="outline" className="text-primary fw-bold">
                Update
              </Button>{" "}
              {"|"}
              <Button variant="outline" className="text-danger fw-bold">Delete</Button> {"|"}
              <Button variant="outline" className="text-success fw-bold">Print</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default View;

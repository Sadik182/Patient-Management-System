import React from "react";
import { useEffect, useState } from "react";
import "./View.css";
import { Button, Form, InputGroup, Table } from "react-bootstrap";

const View = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/patient")
      .then((res) => res.json())
      .then((data) => setPatients(data));
  }, []);

  let id = 1;

  const deletePatient = id => {
    const proceed = window.confirm('Press Ok to confirm Delete');
    if(proceed) {
      console.log('Deleting with id', id);

      const url = `http://localhost:5000/patient/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0) {
          const remaining = patients.filter(patient => patient._id !== id);
          setPatients(remaining);
        }
      })
    }
  }

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
          {
            patients.map(patient => (
              <tr key={patient._id}>
                <td>{id ++}</td>
                <td>{patient.name}</td>
                <td>{patient.disece}</td>
                <td>{patient.number}</td>
                <td>
                <Button variant="outline" className="text-primary fw-bold">
                Update
              </Button>{" "}
              {"|"}
              <Button onClick={() => deletePatient(patient._id)} variant="outline" className="text-danger fw-bold">
                Delete
              </Button>{" "}
              {"|"}
              <Button variant="outline" className="text-success fw-bold">
                Print
              </Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  );
};

export default View;

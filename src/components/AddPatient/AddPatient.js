import React from 'react';
import { Form } from 'react-bootstrap';

const AddPatient = () => {
    const addPatient = (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const disece = event.target.disece.value;
      const number = event.target.number.value;
      const data = { name, disece, number };

      //Send to Database
      fetch("http://localhost:5000/patient", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          alert("Patient Added Successfully");
          event.target.reset();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    return (
        <div>
            <form onSubmit={addPatient}>
                <h1>Add Patient Information</h1>
                <input type="text" name="name" placeholder="Enter Patient Name" required />
                <br />
                <input type="text" name="disece" placeholder="Enter Disece" required /> <br />
                <input type="text" name="number" placeholder="Enter contact Number" required /> <br />
                <input type="submit" value="Add Patient" />
            </form>
        </div>
    );
};

export default AddPatient;




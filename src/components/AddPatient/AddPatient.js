import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddPatient.css';

const AddPatient = () => {
  const navigate = useNavigate()
    const addPatient = (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const disece = event.target.disece.value;
      const number = event.target.number.value;
      const age = event.target.age.value;
      const data = { name, disece, number, age };

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
          navigate('/view');
          event.target.reset();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    return (
        <div className='patient-form'>
            <form onSubmit={addPatient} >
                <h1>Add Patient Information</h1>
                <input className='input-tag' type="text" name="name" placeholder="Enter Patient Name" required />
                <br />
                <input className='input-tag' type="text" name="disece" placeholder="Enter Disece" required /> <br />
                <input className='input-tag' type="text" name="number" placeholder="Enter contact Number" required /> <br />
                <input className='input-tag' type="text" name="age" placeholder="Enter Age" required /> <br />
                
                <input className='button' type="submit" value="Add Patient" />
            </form>
        </div>
    );
};

export default AddPatient;




import React from 'react';
import './AddPatient.css';

const AddPatient = () => {
    const addPatient = (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const disece = event.target.disece.value;
      const number = event.target.number.value;
      const gender = event.target.gender.value;
      const data = { name, disece, number, gender };

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
        <div className='patient-form'>
            <form onSubmit={addPatient} >
                <h1>Add Patient Information</h1>
                <input className='input-tag' type="text" name="name" placeholder="Enter Patient Name" required />
                <br />
                <input className='input-tag' type="text" name="disece" placeholder="Enter Disece" required /> <br />
                <input className='input-tag' type="text" name="number" placeholder="Enter contact Number" required /> <br />
                <div className='gender'>
                <p>Select Your Gender</p>
                <input type="radio" name="gender" id="male" value="Male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="Female" />
                <label for="female">Female</label>
                <input type="radio" name="gender" id="others" value="Others" />
                <label for="others">Others</label>
                </div>
                <input className='button' type="submit" value="Add Patient" />
            </form>
        </div>
    );
};

export default AddPatient;




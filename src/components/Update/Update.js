import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [patients, setPatients] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/patient/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPatients(data));
  }, []);

  const UpdatePatient = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const disece = event.target.disece.value;
    const number = event.target.number.value;
    const gender = event.target.gender.value;
    const data = { name, disece, number, gender };

    //Send to Database
    const url = `http://localhost:5000/patient/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Patient Updated Successfully");
        event.target.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <h1>This is Update page</h1>
      <h2>Updating Patient is {patients.name}</h2>
      <form onSubmit={UpdatePatient}>
        <h1>Add Patient Information</h1>
        <input
          className="input-tag"
          type="text"
          name="name"
          placeholder="Enter Patient Name"
          required
        />
        <br />
        <input
          className="input-tag"
          type="text"
          name="disece"
          placeholder="Enter Disece"
          required
        />{" "}
        <br />
        <input
          className="input-tag"
          type="text"
          name="number"
          placeholder="Enter contact Number"
          required
        />{" "}
        <br />
        <div className="gender">
          <p>Select Your Gender</p>
          <input type="radio" name="gender" id="male" value="Male" />
          <label for="male">Male</label>
          <input type="radio" name="gender" id="female" value="Female" />
          <label for="female">Female</label>
          <input type="radio" name="gender" id="others" value="Others" />
          <label for="others">Others</label>
        </div>
        <input  type="submit" value="Updat" />
      </form>
    </div>
  );
};

export default Update;

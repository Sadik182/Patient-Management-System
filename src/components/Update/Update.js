import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Update.css'

const Update = () => {
  const [name, setName] = useState('');
  const [disece, setDisece] = useState('');
  const [number, setNumber] = useState('');
  const [age, setAge] = useState('');
  const {id} = useParams();
  useEffect( () => {
    getPatientDetails();
  },[]);

  const navigate = useNavigate()
  const getPatientDetails = async () => {
    let result = await fetch(`http://localhost:5000/patient/${id}`);
    result = await result.json();
    console.warn(result);
    setName(result.name);
    setDisece(result.disece);
    setNumber(result.number);
    setAge(result.age);
  }

  const UpdatePatient = async() => {
  let result = await fetch(`http://localhost:5000/patient/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify({name, disece, number, age})
  });
  result = await result.json()
  if(result) {
    navigate('/view');
    alert('Data Update');
  }
     
  };
  return (
    <div>
      <h1 className='text-primary fs-1 my-2'>Update Patient Information</h1>
       <div className="update-form">
          <input type="text" name="name" id="" value={name} placeholder='Enter Patient Name' onChange={(e) => {setName(e.target.value)}} /> <br />
          <input type="text" name="disece" id="" value={disece} placeholder='Enter Disece' onChange={(e) => { setDisece(e.target.value)
          }}/> <br />
          <input type="text" name="number" id="" value={number} placeholder='Enter Contact Number' onChange={(e) => {setNumber(e.target.value)}}  /> <br />
          <input type="text" name="age" id="" value={age} placeholder='Enter Age' onChange={(e) => {setAge(e.target.value)}} /> <br />
        
        <button className='update-button me-3' onClick={UpdatePatient}>Update </button>
      </div>
    </div>
  );
};

export default Update;
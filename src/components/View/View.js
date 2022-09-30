import React from 'react';
import { Button, Table } from 'react-bootstrap';

const View = () => {
    return (
        <Table striped bordered hover>
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
            <Button variant='outline' className="text-primary fw-bold">Update</Button> {'|'}
            <Button variant='outline'>Delete</Button> {'|'}
            <Button variant='outline'>Print</Button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Dark </td>
          <td>Arssdfr</td>
          <td>01715925172</td>
          <td>
            <Button variant='outline' className="text-primary fw-bold">Update</Button> {'|'}
            <Button variant='outline'>Delete</Button> {'|'}
            <Button variant='outline'>Print</Button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Jark</td>
          <td>Srsdfer</td>
          <td>01715925172</td>
          <td>
            <Button variant='outline' className="text-primary fw-bold">Update</Button> {'|'}
            <Button variant='outline'>Delete</Button> {'|'}
            <Button variant='outline'>Print</Button>
          </td>
        </tr>
        
      </tbody>
    </Table>
    );
};

export default View;
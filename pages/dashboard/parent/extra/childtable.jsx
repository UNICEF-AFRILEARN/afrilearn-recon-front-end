import React from 'react';
import Table from 'react-bootstrap/Table';

import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import styles from '../../../../styles/parentdashboard.module.css';


const Childtable = () => {
  return (
    <div className={styles.tablewrapper}>
       <Table striped bordered hover className='mx-5 p-5'>
      <thead>
        <tr>
        <td><MdOutlineCheckBoxOutlineBlank /></td>
          <th>Name</th>
          <th>Class(es)</th>
          <th>Email</th>
          <th>More Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><MdOutlineCheckBoxOutlineBlank /></td>
          <td>Johnson Adewunigbe</td>
          <td>JSS1 , JSS2</td>
          <td>johnsonA@gmail.com</td>
        </tr>
        <tr>
          <td><MdOutlineCheckBoxOutlineBlank /></td>
          <td>Olatunbosun Adewunigbe</td>
          <td>SSS 3</td>
          <td>olatunbosunA@gmail.com</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Childtable
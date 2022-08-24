import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';

import { MdOutlineCheckBoxOutlineBlank,MdOutlineArrowForwardIos } from 'react-icons/md';
import styles from '../../../../styles/parentdashboard.module.css';
import ChildModal from './childModal';
import ChildDetails from './childtablemodal';


const Childtable = ({myChildren}) => {
  const [open, setOpen] = useState(false);
  const [studentId, setStudentId] = useState('')
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    // setPriceSelected(price)
    setOpen(true);
  }

  console.log("myChildren from my children component", myChildren)


    const handleClick = (id) => {
      console.log("I am clicked", id)
      setStudentId(id)
      console.log("I am studentId clicked", studentId)
    }

    const closeModal = () => {
      setOpen(false)
    }

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
          { myChildren && myChildren.map((myChild) => 
        <tr key={myChild.id}>
              <>
                <td><MdOutlineCheckBoxOutlineBlank /></td>
                <td>{myChild.fullName}</td>
                <td>{myChild?.enrolledCourses[0]?.courseId.name? myChild?.enrolledCourses[0]?.courseId.name : "Not enrolled"}</td>
                <td>{myChild.email}</td>
                <td 
                  onClick={() => handleClick(myChild.id)}
                >
                <ChildDetails 
                  handleClose={handleClose}
                  handleOpen={handleOpen}
                  open={open}
                  closeModal={closeModal}
                  myChildren={myChildren}
                  />
                  
                </td>
              </>
        </tr>
          )}
      </tbody>
    </Table>     
    </div>
  )
}

export default Childtable
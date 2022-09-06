import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { MdOutlineCheckBoxOutlineBlank,MdOutlineArrowForwardIos } from 'react-icons/md';
import styles from '../../../../styles/parentdashboard.module.css';
import ChildModal from './childModal';
import ChildDetails from './childtablemodal';


const Childtable = ({myChildren, handleCheckedBox, userId}) => {
  const {user } = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [open, setOpen] = useState(false);
  const [studentId, setStudentId] = useState('')
  const [childName, setChildName] = useState('')
  const [childEmail, setChildEmail] = useState('')
  const [childClass, setChildClass] = useState('')
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    // setPriceSelected(price)
    setOpen(true);
  }


    const handleClick = (id, email, name, myChildclass) => {
      console.log("I am clicked", id)
      setStudentId(id)
      setChildEmail(email)
      setChildName(name)
      setChildClass(myChildclass)
      console.log("I am studentId clicked", studentId)
    }

    // const handleCheckedBox = (id) => {
    //     console.log("I am checked", id)

    // }

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
                <td>
                  <input
                   value={isSubscribed}
                  //  onChange={}
                  onClick={() => handleCheckedBox(myChild.id)}
                  type='checkbox' 
                  />
                </td>
                <td>{myChild.fullName}</td>
                <td>{myChild?.enrolledCourses[0]?.courseId.name? myChild?.enrolledCourses[0]?.courseId.name : "Not enrolled"}</td>
                <td>{myChild.email}</td>
                <td 
                  onClick={() => setModalShow(true)}
                >
                view details

                </td>
              </>
        </tr>
          )}
      </tbody>
    </Table> 
    <ChildDetails 
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  myChildren={myChildren}
                  studentId={studentId}
                  childEmail={childEmail}
                  childName={childName}
                  childClass={childClass}
                  />    
    </div>
  )
}

export default Childtable
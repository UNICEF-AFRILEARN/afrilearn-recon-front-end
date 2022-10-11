import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { MdOutlineCheckBoxOutlineBlank,MdOutlineArrowForwardIos } from 'react-icons/md';
import styles from '../../../../styles/parentdashboard.module.css';
import ChildModal from './childModal';
import ChildDetails from './childtablemodal';


const Childtable = ({myChildren, handleCheckedBox, userId, handleViewChildDetails, setUserId}) => {
  const {user } = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [open, setOpen] = useState(false);
  const [checkAllInputs, setCheckAllInpus] = useState();
  const [isChecked, setIsChecked] = useState(false)
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

  console.log("I am clicked userId", userId)

    const handleClick = (id, email, name, myChildclass) => {
      setStudentId(id)
      setChildEmail(email)
      setChildName(name)
      setChildClass(myChildclass)
    }

    const handleCheckAll = (e) => {
        console.log("Testing Name", e)
    }

    const closeModal = () => {
      setOpen(false)
    }

  return (
    <div className={styles.tablewrapper}>
       <Table striped bordered hover className='mx-5 p-5'>
      <thead>
        <tr>
        <td>
        <input
                   value={isSubscribed}
                  //  onChange={}
                  // onClick={() => handleCheckedBox(myChild.id)}
                  type='checkbox' 
                  />
        </td>
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
                  name='childId'
                  isChecked={isChecked}
                  onClick={(e) => {handleCheckedBox(myChild.id), handleCheckAll(e.target.name)}}
                  type='checkbox' 
                  />
                </td>
                <td>{myChild.fullName}</td>
                <td>{myChild?.enrolledCourses[0]?.courseId.name? myChild?.enrolledCourses[0]?.courseId.name : "Not enrolled"}</td>
                <td>{myChild?.email}</td>
                <td
                className={styles.viewwrapper} 
                  onClick={() => {setModalShow(true), handleViewChildDetails(myChild?.id)}}
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
         setUserId={setUserId}
         userId={userId}
         handleViewChildDetails={handleViewChildDetails}
         /> 
    </div>
  )
}

export default Childtable
import React, { useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import styles from '../../../../styles/parentdashboard.module.css';
import ParentHeader from '../extra/header';
import Middlebar from '../extra/middlebar';
import Proaddvert from '../extra/proaddvert';
import { useSelector } from 'react-redux';
import { fetchRoles } from '../../../../redux/actions/auth';

const Addmychild = () => {
  const dispatch = useDispatch()
  const [childData, setChildData] = useState({

  })
  const {classes } = useSelector((state) => state.auth)
  const childClasses = classes.courses

  useEffect(() => {
    dispatch(fetchRoles())
  }, []);

  // console.log("roles from addchild => ", childClass[0])
  return (
    <div className={styles.parentcomponentwrapper}>
    <div className={styles.innerparentwrapper}>
         <ParentHeader />
         <Middlebar />
         <Proaddvert />
    </div>
    <div className={styles.parentchildformwrapper}>
         <div className={styles.innerformwrapper}>
            <h3>Add My Child</h3>
         <Form>
            <Form.Label>Add your child to the league of world class learners on Afrilearn</Form.Label>
            <Form.Group>
                    <Form.Control 
                    type="text" 
                    placeholder="student" 
                    className="my-3"
                    // value={}
                    />
                    <select
                    // value={roleSelected}
                    onChange={(e) => setRoleSelected(e.target.value)}
                    className={`${styles.pushDown} form-control form-control-sm`}
                    defaultValue={"default"}
                    >
                      <option value={"default"}>
                         Select a class
                      </option>
           
                      {childClasses && childClasses.map((childClass) => 
                      <option  
                        placeholder='Select a Role'
                        >{childClass.name}
                      </option>
                      )}
                  </select>

                    <Form.Control 
                    type="text" 
                    placeholder="Select class" 
                    className="my-3" 
                    />

                    <Form.Control 
                    type="text" 
                    placeholder="Full Name" 
                    className="my-3" 
                    />

                    <Form.Control 
                    type="email" 
                    placeholder="Email" 
                    className="my-3" 
                    />
                    <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    className="my-3" 
                    />
                    <Form.Control 
                    type="password" 
                    placeholder="Confirm Password"  
                    className="my-3" 
                    />
            </Form.Group>
            <Button variant="primary" type="submit">
                Add my Child
            </Button>
            </Form>
         </div>   
    </div>
  </div>
  )
}

export default Addmychild
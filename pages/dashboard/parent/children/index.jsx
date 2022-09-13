import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { BiUnlink } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaLink } from 'react-icons/fa';

import { unlinkChildInitiate, deleteChildInitiate} from '../../../../redux/actions/parent'
import styles from '../../../../styles/parentdashboard.module.css';
import ParentHeader from '../extra/header';
import Childtable from '../extra/childtable';
import { fetchParentChildrenInitiate } from './../../../../redux/actions/dashboard';
import Unlinkmodal from '../extra/unlinkmodal';
import Linkachildmodal from '../extra/linkachildmodal';
import Linksuccess from '../extra/linksuccess';
const Chidren = () => {
  const { children } = useSelector((state) => state.dashboard);
  const { unlinkedChild, linkedChild, deletedChild } = useSelector((state) => state.parentR);
  const { user } = useSelector((state) => state.auth)
  const [userId, setUserId] = useState('')
  const [modalShow, setModalShow] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);
  // const [test, setTest] = useState(false);
  const dispatch = useDispatch();

  let token = user?.token
  let parentId = user?.user?.id
  let myChildren = children?.data?.children;

  const handleCheckedBox = (childId) => {
    if (event.target.checked) {
      setUserId(childId)
      console.log('✅ Checkbox is checked', childId, parentId);
      
    } else {
      setUserId('')
      console.log('⛔️ Checkbox is NOT checked');
    }
  };
  
  const handleViewChildDetails = (childId) => {
    console.log("For modal details", childId)
    setUserId(childId)
  }
  const showClickedIcon = (action) => {
    setClickedAction(action)

  }

  const handleDeleteChild = () => {
    dispatch(deleteChildInitiate(userId, parentId))
  }

  const clickUnlinkChild = () => {
    dispatch(unlinkChildInitiate(userId, parentId))
  }

  useEffect(() => {
    dispatch(fetchParentChildrenInitiate(token))
  }, [unlinkedChild, linkedChild, deletedChild])


  return (
    <div className={styles.childrenmainwrapper}>
           <div className={styles.childrenheaderwrapper}>
                <ParentHeader />
           </div>
            <div className={styles.linkwrapper}>
                <div className={styles.leftlinkswrapper}>
                <span><BiUnlink /></span> 

                  <p 
                  className={styles.unlinkwrapper}
                  onClick={() => setModalShow(true)}
                  >  Unlink account</p>
                    <span><RiDeleteBin6Line color='red'/></span>
                     <p className={styles.deletewrapper}
                    //  onClick={handleDeleteChild}
                    onClick={() => setModalShow(true)}
                     > Delete</p>
                </div>
                <div className={styles.rightlinkswrapper}>
                <span><FaLink /></span> <p 
                className={styles.linkinchildwrapper}
                onClick={() => setShowModalTwo(true)}
                > Link Existing Account</p>
                </div>
            </div>
            <Childtable 
              myChildren={myChildren}
              handleCheckedBox={handleCheckedBox}
              handleViewChildDetails={handleViewChildDetails}
              userId={userId}
            />
           
          <Unlinkmodal
           show={modalShow}
           userId={userId}
           onHide={() => setModalShow(false)}
           clickUnlinkChild={clickUnlinkChild}
           handleDeleteChild={handleDeleteChild}
          />

       <Linkachildmodal 
        show={showModalTwo}
        onHide={() => setShowModalTwo(false)}
       />
       <Linksuccess 
          deletedChild={deletedChild}
       />
         
    </div>
  )
}

export default Chidren
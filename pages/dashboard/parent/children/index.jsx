import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BiUnlink } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaLink } from 'react-icons/fa';


import styles from '../../../../styles/parentdashboard.module.css';
import ParentHeader from '../extra/header';
import Childtable from '../extra/childtable';
import { fetchParentChildrenInitiate } from './../../../../redux/actions/dashboard';
const Chidren = () => {
  const { children } = useSelector((state) => state.dashboard);
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch();

  let token = user?.token
  let myChildren = children?.data?.children;

  

  useEffect(() => {
    dispatch(fetchParentChildrenInitiate(token))
  }, [])

  return (
    <div className={styles.childrenmainwrapper}>
           <div className={styles.childrenheaderwrapper}>
                <ParentHeader />
           </div>
            <div className={styles.linkwrapper}>
                <div className={styles.leftlinkswrapper}>
                <span><BiUnlink /></span> <p className={styles.unlinkwrapper}>  Unlink account</p>
                    <span><RiDeleteBin6Line color='red'/></span><p className={styles.deletewrapper}> Delete</p>
                </div>
                <div className={styles.rightlinkswrapper}>
                <span><FaLink /></span> <p className={styles.linkinchildwrapper}> Link Existing Account</p>
                </div>
            </div>
            <Childtable 
              myChildren={myChildren}
            />
    </div>
  )
}

export default Chidren
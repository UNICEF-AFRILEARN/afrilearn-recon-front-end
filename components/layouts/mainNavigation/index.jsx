/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import { BsSearch, BsBell } from "react-icons/bs";
import { BiDownArrow } from 'react-icons/bi';
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import styles from "./mainNavigation.module.css";
import AppButton from "../../widgets/buttons/AppButton";


import { BsPersonCircle } from 'react-icons/bs';

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userRole, setUserRole] = useState("");
  const { user, registerUser } = useSelector(state => state.auth)

  useEffect(() => {
    console.log("From main navebar", registerUser?.user?.role)
    const roleId = user?.user?.role || registerUser?.user?.role || user?.user?.id
    console.log("From roleId main navebar", roleId)
    setUserRole(roleId)
  }, [user])


  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      collapseOnSelect
      style={{ backgroundColor: "#FDFDFD !important" }}
    >
        <Navbar.Brand>
          <Link passHref href="/">
            <img
              src="https://myafrilearn.com/static/media/logonew.4424f4df.png"
              alt="logo"
              className="brand-logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <div className='main-navbar-with-login'> */}
            {userRole === "not_login" &&
              <div className="our-story-frag">
                Our Story 
              </div>
            }
             {userRole === '5fd08fba50964811309722d5' &&
              <div className={styles.parentloggedindash}>
                <ul>
                  <Link passHref href="/dashboard/student">
                    <li>Dashboard</li>
                  </Link>
                  <Link passHref href="/dashboard/student">
                    <li>Performance Analysis</li>
                  </Link>
                  <Link passHref href="/payment">
                    <li>Subscribe</li>
                </Link>
                <div className={styles.navicons}>
                  <span><BsSearch /></span>
                  <span><BsBell /></span>
                  <span><AiOutlineSafetyCertificate /></span>
                </div>
              
                </ul>
                <div className={styles.avatarcontainer}>
                         <Link passHref href="/dashboard/student/studentProfile" className="btn-log-in-mobile">
                          <BsPersonCircle size={30} className={styles.profileavatar}/>
                          </Link>
                      <div className={styles.iconswrapper}>
                      <Link passHref href="/dashboard/student/studentProfile" className="btn-log-in-mobile">
                          <BiDownArrow size={20} className={styles.profileavatar}/>
                          </Link>
                          <div className={styles.linkswrapper}>
                            <a href="#">Add New class</a>
                            <a href="#">My Feeds</a>
                            <a href="#">Manage Profile</a>
                            <a href="#">Share Feedback</a>
                            <a href="#">Log out</a>
                          </div>
                      </div>
                  </div>
              </div>
              
            }

            {userRole === '602f3ce39b146b3201c2dc1d' &&
              <div className={styles.parentloggedindash}>
                <ul>
                  <Link passHref href="/dashboard/teacher">
                    <li>Dashboard</li>
                  </Link>
                  <Link passHref href="/dashboard/teacher/examinations">
                    <li>Examination</li>
                  </Link>
                  <Link passHref href="/payment">
                    <li>Subscribe</li>
                </Link>
                <Link passHref href="/dashboard/teacher/classwork/mystudents">
                    <li>My Student</li>
                </Link>
                <Link passHref href="/dashboard/teacher/classwork">
                    <li>Classwork</li>
                </Link>
                <div className={styles.navicons}>
                  <span><BsSearch /></span>
                  <span><BsBell /></span>
                  <span><AiOutlineSafetyCertificate /></span>
                </div>
              
                </ul>
                  <div className={styles.avatarcontainer}>
                         <Link passHref href="/dashboard/teacher/teacherProfile" className="btn-log-in-mobile">
                          <BsPersonCircle size={30} className={styles.profileavatar}/>
                          </Link>
                      <div className={styles.iconswrapper}>
                      <Link passHref href="/dashboard/teacher/teacherProfile" className="btn-log-in-mobile">
                          <BiDownArrow size={20} className={styles.profileavatar}/>
                          </Link>
                          <div className={styles.linkswrapper}>
                            <a href="#">Add New class</a>
                            <a href="#">My Feeds</a>
                            <a href="#">Manage Profile</a>
                            <a href="#">Share Feedback</a>
                            <a href="#">Log out</a>
                          </div>
                      </div>
                  </div>
              </div>
              
            }

            {userRole === '606ed82e70f40e18e029165e' &&
              <div className={styles.parentloggedindash}>
                <ul>
                  <Link passHref href="/dashboard/parent">
                    <li>Dashboard</li>
                  </Link>
                  <Link passHref href="/dashboard/parent/addchild">
                    <li>Add My Child</li>
                  </Link>
                  <Link passHref href="/dashboard/parent/children">
                    <li>My Children</li>
                  </Link>
                  <Link passHref href="/payment">
                    <li>Subscribe</li>
                </Link>
                <div className={styles.navicons}>
                  <span><BsSearch /></span>
                  <span><BsBell /></span>
                  <span><AiOutlineSafetyCertificate /></span>
                </div>
              
                </ul>
                <div className={styles.avatarcontainer}>
                         <Link passHref href="/dashboard/student/studentProfile" className="btn-log-in-mobile">
                          <BsPersonCircle size={30} className={styles.profileavatar}/>
                          </Link>
                      <div className={styles.iconswrapper}>
                      <Link passHref href="/dashboard/student/studentProfile" className="btn-log-in-mobile">
                          <BiDownArrow size={20} className={styles.profileavatar}/>
                          </Link>
                          <div className={styles.linkswrapper}>
                            <a href="#">Add New class</a>
                            <a href="#">My Feeds</a>
                            <a href="#">Manage Profile</a>
                            <a href="#">Share Feedback</a>
                            <a href="#">Log out</a>
                          </div>
                      </div>
                  </div>
              </div>
              
            }

            {userRole === '607ededa2712163504210684' &&
              <div className={styles.parentloggedindash}>
                <ul>
                  <Link passHref href="/school">
                    <li>Dashboard</li>
                  </Link>
                  <Link passHref href="/">
                    <li>Add New Student</li>
                  </Link>
                  <Link passHref href="/payment">
                    <li>Subscribe</li>
                </Link>
                  <Link passHref href="/">
                    <li>People</li>
                  </Link>
                <div className={styles.navicons}>
                  <span><BsSearch /></span>
                  <span><BsBell /></span>
                  <span><AiOutlineSafetyCertificate /></span>
                </div>
              
                </ul>
                <div className={styles.avatarcontainer}>
                         <Link passHref href="/school/schoolprofile" className="btn-log-in-mobile">
                          <BsPersonCircle size={30} className={styles.profileavatar}/>
                          </Link>
                      <div className={styles.iconswrapper}>
                      <Link passHref href="/school/schoolProfile" className="btn-log-in-mobile">
                          <BiDownArrow size={20} className={styles.profileavatar}/>
                          </Link>
                          <div className={styles.linkswrapper}>
                            <a href="#">Add New class</a>
                            <a href="#">My Feeds</a>
                            <a href="#">Manage Profile</a>
                            <a href="#">Share Feedback</a>
                            <a href="#">Log out</a>
                          </div>
                      </div>
                  </div>
              </div>
              
            }

             { userRole !== '606ed82e70f40e18e029165e' && userRole !== '5fd08fba50964811309722d5' && userRole !== '602f3ce39b146b3201c2dc1d' && userRole !== '607ededa2712163504210684' &&
               <div>
                  <Link href="/login">
                <button className={styles.btnlogin}>Login</button>
                </Link>
                <Link href="/register" >
                <button className={styles.btnloginregister}>Register</button>
                </Link>
               </div>
             }
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
export default Navigation;

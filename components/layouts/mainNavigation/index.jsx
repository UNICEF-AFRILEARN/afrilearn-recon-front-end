/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import { BsSearch, BsBell } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import styles from "./mainNavigation.module.css";
import AppButton from "../../widgets/buttons/AppButton";

<<<<<<< HEAD

import { BsPersonCircle } from 'react-icons/bs';

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userRole, setUserRole] = useState("");
  const { user } = useSelector(state => state.auth)
=======
import { BsPersonCircle } from "react-icons/bs";

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userRole, setUserRole] = useState("not_login");
  const { user } = useSelector((state) => state.auth);
>>>>>>> dev

  useEffect(() => {

    console.log("From main navebar", user?.user?.role)
    setUserRole(user?.user?.role)
  }, [user])

    // console.log("From main navebar", user.user?.role);
  //   setUserRole(user.user?.role);
  // }, [user]);


  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      collapseOnSelect
      style={{ backgroundColor: "#FDFDFD !important" }}
    >
      <Container>
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
<<<<<<< HEAD
            {userRole === "not_login" &&
              <div className="our-story-frag">
                Our Story 
              </div>
            }

              {userRole === '606ed82e70f40e18e029165e' &&
=======
            {userRole === "not_login" ||
              (userRole === undefined && (
                <div className="inner-btn-nav-bar">
                  <div className="our-story-frag">Our Story</div>
                  <div className="inner-btn-nav-bar">
                    <Link passHref href="/login" className="btn-log-in-mobile">
                      <AppButton
                        title="LOG IN"
                        className={styles.loginButton}
                      />
                    </Link>
                    <Link
                      passHref
                      href="/register"
                      className="btn-log-in-mobile"
                    >
                      <AppButton title="SIGN UP" secondary />
                    </Link>
                  </div>
                </div>
              ))}

            {userRole === "1" && (
>>>>>>> dev
              <div className={styles.parentloggedindash}>
                <ul>
                  <Link passHref href="/dashboard/parent">
                    <li>Dashboard</li>
                  </Link>
                  <Link passHref href="/dashboard/parent/addchild">
                    <li>Add My Child</li>
                  </Link>
                  <Link passHref href="/payment">
                    <li>Subscribe</li>
<<<<<<< HEAD
                </Link>
                {/* <Link passHref href="/dashboard/parent/children"  >
                    <li>My Children</li>
                </Link> */}
                <div className={styles.navicons}>
                  <span><BsSearch /></span>
                  <span><BsBell /></span>
                  <span><AiOutlineSafetyCertificate /></span>
                </div>
              
                </ul>
                <Link passHref href="/dashboard/student/studentProfile" className="btn-log-in-mobile">
                  < BsPersonCircle size={30}/>
              </Link>
=======
                  </Link>
                  <Link passHref href="/dashboard/parent/children">
                    <li>My Children</li>
                  </Link>
                  <div className={styles.navicons}>
                    <span>
                      <BsSearch />
                    </span>
                    <span>
                      <BsBell />
                    </span>
                    <span>
                      <AiOutlineSafetyCertificate />
                    </span>
                  </div>
                </ul>
                <Link passHref href="/register" className="btn-log-in-mobile">
                  <BsPersonCircle size={30} />
                </Link>
>>>>>>> dev
              </div>
            )}
            {userRole === "1" && (
              <div className={styles.parentloggedindash}>
                <ul>
                  <Link passHref href="/dashboard/teacher">
                    <li>Dashboard</li>
                  </Link>
                  <Link passHref href="/payment">
                    <li>Subscribe</li>
                  </Link>
                  <Link passHref href="/dashboard/teacher/mystudents">
                    <li>My Students</li>
                  </Link>
                  <Link passHref href="/dashboard/teacher/classwork">
                    <li>Classwork</li>
                  </Link>

                  <Link passHref href="/dashboard/teacher/examinations">
                    <li>Examination</li>
                  </Link>
                  <div className={styles.navicons}>
                    <span>
                      <BsSearch />
                    </span>
                    <span>
                      <BsBell />
                    </span>
                    <span>
                      <AiOutlineSafetyCertificate />
                    </span>
                  </div>
                </ul>
<<<<<<< HEAD
                <Link passHref href="/dashboard/student/studentProfile" className="btn-log-in-mobile">
                  < BsPersonCircle size={30}/>
              </Link>
=======
                <Link passHref href="/register" className="btn-log-in-mobile">
                  <BsPersonCircle size={30} />
                </Link>
>>>>>>> dev
              </div>
            )}
            {userRole === "5fd08fba50964811309722d5" && (
              <div className={styles.loggedindash}>
                <ul>
                  <Link passHref href="/dashboard/student">
                    <li>Dashboard</li>
                  </Link>
                  <Link passHref href="/payment">
                    <li>subscribe</li>
                  </Link>
                  <Link passHref href="/dashboard/performance">
                    <li>Performance Analysis</li>
                  </Link>
                  <div className={styles.navicons}>
                    <span>
                      <BsSearch />
                    </span>
                    <span>
                      <BsBell />
                    </span>
                    <span>
                      <AiOutlineSafetyCertificate />
                    </span>
                  </div>
                </ul>
              </div>
<<<<<<< HEAD
              }
                
              { userRole !== '606ed82e70f40e18e029165e' && userRole !== '5fd08fba50964811309722d5' &&
=======
            )}

            {userRole === "1" && (
>>>>>>> dev
              <div className="inner-btn-nav-bar">
                <Link passHref href="/login" className="btn-log-in-mobile">
                  <AppButton title="LOG IN" className={styles.loginButton} />
                </Link>
                <Link passHref href="/register" className="btn-log-in-mobile">
                  <AppButton title="SIGN UP" secondary />
<<<<<<< HEAD
              </Link>

              </div>
              }
              
              {<div className="inner-btn-nav-bar">
              {/* <Link passHref href="/login" className="btn-log-in-mobile">
                  <AppButton title="Log out" className={styles.loginButton} />
              </Link> */}
              { userRole === '606ed82e70f40e18e029165e' || userRole === '5fd08fba50964811309722d5' &&
                <Link passHref href="/dashboard/student/studentProfile" className={`${styles.avatarstyles}btn-log-in-mobile`}>
                  < BsPersonCircle size={30} />
              </Link>}

              </div>}
           {/* </div> */}
=======
                </Link>
              </div>
            )}
>>>>>>> dev
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

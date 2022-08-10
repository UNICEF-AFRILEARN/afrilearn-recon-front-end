/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import { BsSearch, BsBell } from "react-icons/bs";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import styles from "./mainNavigation.module.css";
import AppButton from "../../widgets/buttons/AppButton";


import { BsPersonCircle } from 'react-icons/bs';

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userRole, setUserRole] = useState("");
  const { user } = useSelector(state => state.auth)

  useEffect(() => {

    console.log("From main navebar", user?.user?.role)
    setUserRole(user?.user?.role)
  }, [user])


  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      collapseOnSelect
      style={{ backgroundColor: "#FDFDFD !important" }}
    >
      {/* <Container> */}
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
                <Link passHref href="/dashboard/student/studentProfile" className="btn-log-in-mobile">
                  < BsPersonCircle size={30}/>
              </Link>

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
                  <Link passHref href="/payment">
                    <li>Subscribe</li>
                </Link>
                <div className={styles.navicons}>
                  <span><BsSearch /></span>
                  <span><BsBell /></span>
                  <span><AiOutlineSafetyCertificate /></span>
                </div>
              
                </ul>
                <Link passHref href="/dashboard/student/studentProfile" className="btn-log-in-mobile">
                  < BsPersonCircle size={30}/>
              </Link>

              </div>
              
            }
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}
export default Navigation;

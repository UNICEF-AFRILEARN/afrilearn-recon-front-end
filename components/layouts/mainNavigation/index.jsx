/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";
import { BsSearch, BsBell } from 'react-icons/bs';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import styles from "./mainNavigation.module.css";
import AppButton from "../../widgets/buttons/AppButton";

import { BsPersonCircle } from 'react-icons/bs';

const Navigation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      collapseOnSelect
      style={{ backgroundColor: "#FDFDFD !important" }}
    >

      <Container>
        <Navbar.Brand><Link passHref href="/"><img src="https://myafrilearn.com/static/media/logonew.4424f4df.png" alt='logo' className="brand-logo"/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            {/* <div className='main-navbar-with-login'> */}
            {!isLoggedIn && <div className="our-story-frag">
                Our Story 
              </div>}

              {isLoggedIn && 
              <div className={styles.loggedindash}>
                <ul>
            
                <Link passHref href="/dashboard/student" >
                  <li>Dashboard</li>
                </Link>
                <Link passHref href="/login" >
                    <li>subscribe</li>
                </Link>
                <Link passHref href="/dashboard/performance"  >
                    <li>Performance Analysis</li>
                </Link>
                <div className={styles.navicons}>
                  <span><BsSearch /></span>
                  <span><BsBell /></span>
                  <span><AiOutlineSafetyCertificate /></span>
                </div>

                </ul>
              </div>
              }
                
              {!isLoggedIn && <div className="inner-btn-nav-bar">
              <Link passHref href="/login" className="btn-log-in-mobile">
                  <AppButton title="LOG IN" className={styles.loginButton} />
              </Link>
              <Link passHref href="/register" className="btn-log-in-mobile">
                  <AppButton title="SIGN UP" secondary />
              </Link>

              </div>}
              {isLoggedIn && <div className="inner-btn-nav-bar">
              {/* <Link passHref href="/login" className="btn-log-in-mobile">
                  <AppButton title="Log out" className={styles.loginButton} />
              </Link> */}
              <Link passHref href="/register" className="btn-log-in-mobile">
                  < BsPersonCircle size={30}/>
              </Link>

              </div>}
           {/* </div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

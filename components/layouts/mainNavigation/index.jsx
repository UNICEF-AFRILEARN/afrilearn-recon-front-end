/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
// import Toggle from "../../widgets/toggle/index"
import { BsSearch, BsBell } from 'react-icons/bs'

import { BiDownArrow } from 'react-icons/bi'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'
import styles from './mainNavigation.module.css'
import AppButton from '../../widgets/buttons/AppButton'
import { persistor } from '../../../redux/store'

import { BsPersonCircle } from 'react-icons/bs'
import Image from 'next/image'

const Navigation = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [showList, setShowList] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [userRole, setUserRole] = useState('')
  const { user, registerUser } = useSelector((state) => state.auth)

  // const { enrolledCourses } = user.user

  
  let localData
  // const checkoLocal = () => {
  //   if (typeof window !== "undefined") {
  //     localData = JSON.parse(localStorage.getItem("persist:root"));
  //   }
  //   return localData;
  // };
  // const handleLogout = () => {
  //   window.localStorage.removeItem('')
  //   router.push('/login')

  // }

  const handleShow = () => {
    setShowList(!showList)
    // console.log("I am click")
  }
  const handleLogout = async () => {
    persistor.purge()
    // router.push({
    //   pathname: '/auth/login',
    // },
    // undefined, { shallow: true }
    // )

    // let locals = checkoLocal();

    signIn()
    window.history.pushState(null, 'login', '/login')
    router.push('/login')
  }

  useEffect(() => {
    const roleId =
      user?.user?.role || registerUser?.user?.role || user?.user?.id
    setUserRole(roleId)
  }, [user])

  return (
    <Navbar
      // bg="light"
      expand="lg"
      // fixed="top"
      collapseOnSelect
      // style={{ backgroundColor: "#FDFDFD !important" }}
      className={`${styles.mainNavbar} pt-3`}
    >
      <Navbar.Brand>
        <Link passHref href="/">
          <Image
            src="/assets/img/logonew.png"
            alt="logo"
            className="brand-logo"
            width="150px"
            height="50px"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <Toggle /> */}

      {/* <DarkModeToggle /> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-aut">
            
          {/* <div className='main-navbar-with-login'> */}
          {userRole === 'not_login' && (
            <div className="our-story-frag">Our Story</div>
          )}
          {userRole === '5fd08fba50964811309722d5' && (
            <div className={styles.parentloggedindash}>
              <ul>
                <Link passHref href="/dashboard/student">
                  <li>Dashboard</li>
                </Link>
                <Link passHref href="/dashboard/student-performance">
                  <li>Performance Analysis</li>
                </Link>
                <Link passHref href="/payment">
                  <li>Subscribe</li>
                </Link>
                <Link passHref href="/about">
                  <li>About Us</li>
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
              <div className={styles.avatarcontainer}>
                <Link
                  passHref
                  href="/dashboard/student/studentProfile"
                  className="btn-log-in-mobile"
                >
                  {user?.user.profilePhotoUrl !== undefined ? (
                    <Image
                      alt={'afrilearn marketing video'}
                      src={user?.user.profilePhotoUrl}
                      width={40}
                      height={40}
                      className={styles.profileavatar1}
                    />
                  ) : (
                    <BsPersonCircle
                      size={35}
                      className={styles.profileavatar}
                    />
                  )}
                </Link>
                <div className={styles.iconswrapper}>
                  {/* <Link
                    // passHref
                    // href="/dashboard/student/studentProfile"
                    className="btn-log-in-mobile"
                    
                  > */}
                  <BiDownArrow
                    size={15}
                    className={styles.profileavatar2}
                    onClick={handleShow}
                  />
                  {/* </Link> */}
                  {showList === true && (
                    <div className={styles.linkswrapper}>
                       <div>
                      <a href="/payment">{user?.user?.enrolledCourses[0]?.courseId?.name}</a>
                      </div>
                      <a href="/payment">Add New class</a>
                      <Link href="/dashboard/socialfeeds">My Feeds</Link>
                      <Link href="/dashboard/student/studentProfile">
                        <a>Manage Profile</a>
                      </Link>
                      <a href="#">Share Feedback</a>
                      <a onClick={handleLogout}>Log out</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {userRole === '602f3ce39b146b3201c2dc1d' && (
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
                <Link passHref href="/about">
                  <li>About Us</li>
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
              <div className={styles.avatarcontainer}>
                <Link
                  passHref
                  href="/dashboard/teacher/teacherProfile"
                  className="btn-log-in-mobile"
                >
                  {user?.user.profilePhotoUrl !== undefined ? (
                    <Image
                      alt={'afrilearn marketing video'}
                      src={user?.user.profilePhotoUrl}
                      width={45}
                      height={45}
                      className={styles.profileavatar1}
                    />
                  ) : (
                    <BsPersonCircle
                      size={35}
                      className={styles.profileavatar}
                    />
                  )}
                </Link>
                <div className={styles.iconswrapper}>
                  {/* <Link
                    // passHref
                    // href="/dashboard/teacher/teacherProfile"
                    className="btn-log-in-mobile"
                  > */}
                  <BiDownArrow
                    size={15}
                    onClick={handleShow}
                    className={styles.profileavatar2}
                  />
                  {/* </Link> */}
                  {showList === true && (
                    <div className={styles.linkswrapper}>
                       <div>
                      <a href="/payment">{user?.user?.enrolledCourses[0]?.courseId?.name}</a>
                      </div>
                      <a href="/payment">Add New class</a>
                      <Link href="/dashboard/socialfeeds">My Feeds</Link>
                      <Link href="/dashboard/student/studentProfile">
                        <a>Manage Profile</a>
                      </Link>
                      <a href="#">Share Feedback</a>
                      <a onClick={handleLogout}>Log out</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {userRole === '606ed82e70f40e18e029165e' && (
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
                <Link passHref href="/about">
                  <li>About Us</li>
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
              <div className={styles.avatarcontainer}>
                <Link
                  passHref
                  href="/dashboard/student/studentProfile"
                  className="btn-log-in-mobile"
                >
                  {user?.user.profilePhotoUrl !== undefined ? (
                    <Image
                      alt={'afrilearn marketing video'}
                      src={user?.user.profilePhotoUrl}
                      width={45}
                      height={45}
                      className={styles.profileavatar1}
                    />
                  ) : (
                    <BsPersonCircle
                      size={35}
                      className={styles.profileavatar}
                    />
                  )}
                </Link>
                <div className={styles.iconswrapper}>
                  {/* <Link
                    // passHref
                    // href="/dashboard/student/studentProfile"
                    className="btn-log-in-mobile"
                  > */}
                  <BiDownArrow
                    size={15}
                    className={styles.profileavatar2}
                    onClick={handleShow}
                  />
                  {/* </Link> */}
                  {showList === true && (
                    <div className={styles.linkswrapper}>
                       <div>
                      <a href="/payment">{user?.user?.enrolledCourses[0]?.courseId?.name}</a>
                      </div>
                      <a href="/payment">Add New class</a>

                      <Link href="/dashboard/socialfeeds">My Feeds</Link>
                      <Link href="/dashboard/student/studentProfile">
                        <a>Manage Profile</a>
                      </Link>
                      <a href="#">Share Feedback</a>
                      <a onClick={handleLogout}>Log out</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {userRole === '607ededa2712163504210684' && (
            <div className={styles.parentloggedindash}>
              <ul>
                <Link passHref href="/school">
                  <li>Dashboard</li>
                </Link>
                <Link passHref href="/school/addnewstudent">
                  <li>Add New Student</li>
                </Link>
                <Link passHref href="/payment">
                  <li>Subscribe</li>
                </Link>
                <Link passHref href="/school/schoolpeople">
                  <li>People</li>
                </Link>
                <Link passHref href="/about">
                  <li>About Us</li>
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
              <div className={styles.avatarcontainer}>
                <Link
                  passHref
                  href="/school/schoolprofile"
                  className="btn-log-in-mobile"
                >
                  {user?.user.profilePhotoUrl !== undefined ? (
                    <Image
                      alt={'afrilearn marketing video'}
                      src={user?.user.profilePhotoUrl}
                      width={45}
                      height={45}
                      className={styles.profileavatar1}
                    />
                  ) : (
                    <BsPersonCircle
                      size={35}
                      className={styles.profileavatar}
                    />
                  )}
                </Link>
                <div className={styles.iconswrapper}>
                  {/* <Link
                    // passHref
                    // href="/school/schoolProfile"
                    className="btn-log-in-mobile"
                  > */}
                  <BiDownArrow
                    size={15}
                    className={styles.profileavatar2}
                    onClick={handleShow}
                  />
                  {/* </Link> */}
                  {showList === true && (
                    <div className={styles.linkswrapper}>
                      <div>
                      <a href="/payment">{user?.user?.enrolledCourses[0]?.courseId?.name}</a>
                      </div>
                      <a href="/payment">Add New class</a>
                      <Link href="/dashboard/socialfeeds">My Feeds</Link>
                      <Link href="/dashboard/student/studentProfile">
                        <a>Manage Profile</a>
                      </Link>
                      <a href="#">Share Feedback</a>
                      <a onClick={handleLogout}>Log out</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {userRole !== '606ed82e70f40e18e029165e' &&
            userRole !== '5fd08fba50964811309722d5' &&
            userRole !== '602f3ce39b146b3201c2dc1d' &&
            userRole !== '607ededa2712163504210684' && (
              <div className={styles.nologinmenu}>
                {/* implementing next.auth */}
                <Link href="/about">
                  <button className={styles.aboutmenu}>About Us</button>
                </Link>
                <Link href="/login">
                  <button className={styles.btnlogin}>Login</button>
                </Link>
                <Link href="/register">
                  <button className={styles.btnloginregister}>Register</button>
                </Link>
              </div>
            )}
           
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Navigation

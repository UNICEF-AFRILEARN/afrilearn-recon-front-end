/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  Modal,
  Spinner,
} from 'react-bootstrap'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
// import Toggle from "../../widgets/toggle/index"
import {
  BsSearch,
  BsBell,
  BsBookmarkFill,
  BsFillBookmarkFill,
  BsBookmark,
} from 'react-icons/bs'

import { BiDownArrow } from 'react-icons/bi'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'
import styles from './mainNavigation.module.css'
import AppButton from '../../widgets/buttons/AppButton'
import { persistor } from '../../../redux/store'

import { BsPersonCircle } from 'react-icons/bs'
import Image from 'next/image'
import {
  fetchCourseDetailsInitiate,
  getSearchResults,
} from '../../../redux/actions/subject'
import Swal from 'sweetalert2'

const Navigation = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [showList, setShowList] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [userRole, setUserRole] = useState('')
  const { user, registerUser } = useSelector((state) => state.auth)
  const inputRef = useRef()
  const [isHovered, setHovered] = useState(false)
  const [notif, setNotif] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [modalShowed, setModalShowed] = useState(false)
  const [searchIds, setSearchIds] = useState('')
  // const [searchResult, setSearchResult] = useState('')
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
  console.log(modalShowed)

  const { searchRecord } = useSelector((state) => state.mySubjectCourse)
  console.log(searchRecord)
  useEffect(() => {
    inputRef.current?.focus()
  }, [isHovered])

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

  // useEffect(() => {
  //   setSearchResult(searchRecord)
  // }, [searchResult])

  const [subjCourId, setsubjCourId] = useState({})
  const toggleModal = (cour, subj) => {
    // setShow(!show);
    setsubjCourId({ courId: cour, subjId: subj })
  }

  useEffect(() => {
    // console.log(subjCourId)
    if (Object.keys(subjCourId).length !== 0) {
      dispatch(fetchCourseDetailsInitiate(subjCourId.courId, subjCourId.subjId))
    }
  }, [subjCourId])
  const token = user?.token
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="xs"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="searchModa"
      >
        {props.notClassNote ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                <p style={{ color: 'red', margin: '0' }}>ERROR!</p>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p style={{ textAlign: 'center', fontSize: '14px' }}>
                Unfortunately! this class content is not part of the content you
                subscribed for you can add a class by clicking on this{' '}
                <Link passHref href="/payment">
                  <u
                    style={{ color: '#00d9b6', cursor: 'pointer' }}
                    onClick={props.onHide}
                  >
                    Link
                  </u>
                </Link>
              </p>
            </Modal.Body>
          </>
        ) : (
          <>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                <p style={{ color: '#00d9b6', margin: '0' }}>
                  Redirecting!
                  <Spinner animation="border" size="sm" />
                </p>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p style={{ textAlign: 'center', fontSize: '14px' }}>
                You will now be redirected to ClassNote, when you click on this{' '}
                <Link
                  passHref
                  href={{
                    pathname: '/dashboard/student/classnote/classnotePage',
                    query: [searchIds && searchIds],
                  }}
                >
                  <u
                    style={{ color: '#00d9b6', cursor: 'pointer' }}
                    onClick={props.onHide}
                  >
                    Link
                  </u>
                </Link>
              </p>
            </Modal.Body>
          </>
        )}
      </Modal>
    )
  }

  const sentenceCase = (str) => {
    let s = str.toLowerCase()
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  console.log(user)

  const searchFunc = (id, ids) => {
    console.log(ids)
    user?.user?.enrolledCourses[0].courseId.id === id
      ? (setSearchIds(ids), setModalShowed(true))
      : (setSearchIds(''), setModalShowed(true))
  }

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
                <div>
                  {isHovered === false ? (
                    <Link passHref href="/about" className={styles.aboutUs}>
                      <li>About Us</li>
                    </Link>
                  ) : (
                    <>
                      <input
                        type="text"
                        placeholder="Search Topics"
                        className={styles.searchBox}
                        value={keyword}
                        // name="keyword"
                        ref={inputRef}
                        onChange={(e) => {
                          setKeyword(e.target.value)
                          e.target.value.length > 0 &&
                            dispatch(
                              getSearchResults(
                                e.target.value,
                                { details: true },
                                token
                              )
                            )
                        }}
                        onMouseEnter={() => {
                          setHovered(true)
                        }}
                        onMouseLeave={() => {
                          setHovered(false)
                          // setKeyword('')
                        }}
                      />

                      <div
                        style={{
                          background: 'white',
                          width: '230px',
                          maxHeight: '500px',
                          position: 'absolute',
                          zIndex: '3',
                          top: '57px',
                          borderRadius: '0 0 10px 10px',
                          left: '994px',
                          overflow: 'auto',
                        }}
                        onMouseEnter={() => {
                          setHovered(true)
                        }}
                        onMouseLeave={() => {
                          setHovered(false)
                          setKeyword('')
                        }}
                        className={styles.searchRes}
                      >
                        <ul
                          style={{
                            display: 'block',
                            margin: '5px',
                            padding: '0',
                          }}
                        >
                          {searchRecord?.result?.map((data, i) => (
                            <li
                              key={i}
                              style={{
                                fontSize: '14px',
                                paddingBottom: '10px',
                              }}
                              onClick={() => {
                                searchFunc(data.courseId.id, data.id)
                                toggleModal(data.courseId.id, data.subjectId.id)
                              }}
                            >
                              {sentenceCase(data.title.substr(0, 23))}
                              {data.title.length > 23 ? '...' : null}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* )} */}
                    </>
                  )}
                </div>
                {searchIds !== '' ? (
                  <MyVerticallyCenteredModal
                    show={modalShowed}
                    onHide={() => setModalShowed(false)}
                    notClassNote={false}
                  />
                ) : (
                  <MyVerticallyCenteredModal
                    show={modalShowed}
                    onHide={() => setModalShowed(false)}
                    notClassNote={true}
                  />
                )}
                <div className={styles.navicons}>
                  <span className={`pointer ${styles.searchIcons}`}>
                    <BsSearch
                      onMouseEnter={() => {
                        setHovered(true)
                      }}
                      onMouseLeave={() => {
                        setHovered(false)
                        // setKeyword('')
                      }}
                    />
                  </span>
                  <span>
                    <BsBell
                      className="pointer"
                      onClick={() => setNotif(!notif)}
                    />
                  </span>
                  {notif && (
                    <div
                      style={{
                        background: 'white',
                        width: '400px',
                        height: '400px',
                        position: 'absolute',
                        zIndex: '3',
                        top: '93px',
                        borderRadius: '0 0 10px 10px',
                        left: '979px',
                        overflow: 'auto',
                        border: '1px solid black',
                      }}
                      // onMouseEnter={() => {
                      //   setHovered(true)
                      // }}
                      onMouseLeave={() => {
                        setNotif(false)
                        // setKeyword('')
                      }}
                      className={styles.searchRes}
                    >
                      <h3
                        style={{
                          textAlign: 'center',
                          weigth: '700px',
                          marginTop: '20px',
                        }}
                      >
                        Notifications
                      </h3>
                      <p
                        style={{
                          textAlign: 'center',
                        }}
                      >
                        You have no notification at the moment
                      </p>
                    </div>
                  )}
                  {/* <span>
                    <BsBookmark name="role" />
                  </span> */}
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
                  {/* <BiDownArrow
                    size={15}
                    className={styles.profileavatar2}
                    onClick={handleShow}
                  /> */}
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="green"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu className={styles.dropdown}>
                      <Dropdown.Item href="#">
                        {user?.user?.enrolledCourses[0]?.courseId?.name}
                      </Dropdown.Item>
                      <Dropdown.Item href="#">Add New class</Dropdown.Item>
                      <Dropdown.Item href="/dashboard/socialfeeds">
                        My Feeds
                      </Dropdown.Item>
                      <Dropdown.Item href="/dashboard/student/studentProfile">
                        Manage Profile
                      </Dropdown.Item>
                      <Dropdown.Item href="#">Share Feedback</Dropdown.Item>
                      <Dropdown.Item onClick={handleLogout}>
                        Log out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* </Link> */}
                  {showList === true && (
                    <div className={styles.linkswrapper}>
                      <a href="/payment">Add New class</a>
                      <a href="#">My Feeds</a>
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
                  {/* <BiDownArrow
                    size={15}
                    onClick={handleShow}
                    className={styles.profileavatar2}
                  />
                    className={styles.profileavatar2}
                  /> */}
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="green"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu className={styles.dropdown}>
                      <Dropdown.Item href="#">
                        {user?.user?.enrolledCourses[0]?.courseId?.name}
                      </Dropdown.Item>
                      <Dropdown.Item href="#">Add New class</Dropdown.Item>
                      <Dropdown.Item href="/dashboard/socialfeeds">
                        My Feeds
                      </Dropdown.Item>
                      <Dropdown.Item href="/dashboard/student/studentProfile">
                        Manage Profile
                      </Dropdown.Item>
                      <Dropdown.Item href="#">Share Feedback</Dropdown.Item>
                      <Dropdown.Item onClick={handleLogout}>
                        Log out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* </Link> */}
                  {/* {showList === true && (
                    <div className={styles.linkswrapper}>
                      <a href="/payment">Add New class</a>
                      <Link href="/dashboard/socialfeeds">My Feeds</Link>
                      <Link href="/dashboard/student/studentProfile">
                        <a>Manage Profile</a>
                      </Link>
                      <a href="#">Share Feedback</a>
                      <a onClick={handleLogout}>Log out</a>
                    </div>
                  )} */}
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
                  {/* <BiDownArrow
                    size={15}
                    className={styles.profileavatar2}
                    onClick={handleShow}
                  />
                    onClick={handleShow}
                  /> */}
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="green"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu className={styles.dropdown}>
                      <Dropdown.Item href="#">Add New class</Dropdown.Item>
                      <Dropdown.Item href="/dashboard/socialfeeds">
                        My Feeds
                      </Dropdown.Item>
                      <Dropdown.Item href="/dashboard/student/studentProfile">
                        Manage Profile
                      </Dropdown.Item>
                      <Dropdown.Item href="#">Share Feedback</Dropdown.Item>
                      <Dropdown.Item onClick={handleLogout}>
                        Log out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* </Link> */}
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
                  {/* <BiDownArrow
                    size={15}
                    className={styles.profileavatar2}
                    onClick={handleShow}
                  />
                  /> */}
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="green"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu className={styles.dropdown}>
                      <Dropdown.Item href="#">
                        {user?.user?.enrolledCourses[0]?.courseId?.name}
                      </Dropdown.Item>
                      <Dropdown.Item href="#">Add New class</Dropdown.Item>
                      <Dropdown.Item href="/dashboard/socialfeeds">
                        My Feeds
                      </Dropdown.Item>
                      <Dropdown.Item href="/dashboard/student/studentProfile">
                        Manage Profile
                      </Dropdown.Item>
                      <Dropdown.Item href="#">Share Feedback</Dropdown.Item>
                      <Dropdown.Item onClick={handleLogout}>
                        Log out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* </Link> */}
                  {/* {showList === true && (
                    <div className={styles.linkswrapper}>
                      <a href="/payment">Add New class</a>
                      <Link href="/dashboard/socialfeeds">My Feeds</Link>
                      <Link href="/dashboard/student/studentProfile">
                        <a>Manage Profile</a>
                      </Link>
                      <a href="#">Share Feedback</a>
                      <a onClick={handleLogout}>Log out</a>
                    </div>
                  )} */}
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

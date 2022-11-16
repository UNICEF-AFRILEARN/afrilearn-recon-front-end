import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import styles from '../../../../styles/search.module.css'
import { BsHash, BsEmojiSmile, BsPersonCircle } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import Picker from 'emoji-picker-react'
import {
  addAPostToFeed,
  commentToAPost,
  getCourseAndRelatedSubjectsForFeed,
  getMyPostsInFeed,
  likeACommentPostToFeed,
  likeAPostToFeed,
  unLikeACommentPostToFeed,
  unLikeAPostToFeed,
} from '../../../../redux/actions/subject'
import { Col, Dropdown, Row } from 'react-bootstrap'
import styles1 from '../../../../pages/dashboard/teacher/teacher.module.css'
import moment from 'moment'
import ReactPaginate from 'react-paginate'

// import dynamic from 'next/dynamic'

const CenterCard = () => {
  const { user } = useSelector((state) => state.auth)
  const [emoji, setEmoji] = useState(false)
  const [hashTag, setHashTag] = useState(false)
  // const [postAFeed, setPostAFeed] = useState('')
  const [inputStr, setInputStr] = useState('')
  const [inputComment, setInputComment] = useState('')
  const [addImage, setAddImage] = useState('')
  const [addCommentImage, setAddCommentImage] = useState('')
  const [image, setImage] = useState(false)
  const [commentImage, setCommentImage] = useState(false)
  const [send, setSend] = useState(false)
  const [message, setMessage] = useState(false)

  const [numPost, setNumPost] = useState(false)
  const [commentPost, setCommentPost] = useState('')
  const inputRef = useRef()
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setImage(e.target.files[0])
  }
  const handleChangeImage = (e) => {
    setAddCommentImage(e.target.files[0])
  }
  const token = user?.token
  useEffect(() => {
    dispatch(getCourseAndRelatedSubjectsForFeed())
    dispatch(getMyPostsInFeed(token))
  }, [getCourseAndRelatedSubjectsForFeed, getMyPostsInFeed])
  useEffect(() => {
    inputRef.current?.focus()
  }, [inputStr])
  const HandleLikes = ({ data, likesClick, unlikesClick }) => {
    const links = data?.filter((data_id) => {
      return data_id === user?.user?.id
    })

    return (
      <div onClick={links?.length > 0 ? unlikesClick : likesClick}>
        {links?.length > 0 ? (
          <Image
            alt={'Feeds pictures'}
            src={'/assets/img/likes1.png'}
            width="25px"
            height="25px"
          />
        ) : (
          <Image
            alt={'Feeds pictures'}
            src={'/assets/img/likes.png'}
            width="25px"
            height="25px"
          />
        )}
      </div>
    )
  }
  const SendFunc = () => {
    setSend(true)
    setTimeout(() => {
      setSend(false)
    }, 3000)
  }

  const { feedSubjectAndCourse, feedPost } = useSelector(
    (state) => state.mySubjectCourse
  )

  const postComment = (postId) => {
    let commentData = new FormData()
    commentData.append('text', inputComment)
    if (commentImage) {
      commentData.append('image', addCommentImage)
    }
    if (inputComment) {
      dispatch(commentToAPost(postId, commentData, token))
      setInputComment('')
      setAddCommentImage('')
    }
  }
  const [pageNumber, setPageNumber] = useState(0)

  const usersPerPage = 10
  const pagesVisited = pageNumber * usersPerPage
  const Post = () => {
    return feedPost
      ?.slice(pagesVisited, pagesVisited + usersPerPage)
      .map((data, i) => {
        return (
          <Row
            key={i}
            className={styles.centercardwrapper}
            style={{ padding: '0' }}
          >
            <Col md={10} xs={9}>
              <Row style={{ display: 'flex', margin: '10px' }}>
                <div style={{ width: 'fit-content' }}>
                  {data?.userId?.profilePhotoUrl !== undefined ? (
                    <Image
                      alt={'afrilearn marketing video'}
                      src={data?.userId?.profilePhotoUrl}
                      width={35}
                      height={35}
                      className={styles.profileavatar1}
                    />
                  ) : (
                    <BsPersonCircle
                      size={35}
                      className={styles.profileavatar}
                    />
                  )}
                </div>
                <div style={{ width: 'fit-content' }} className="mt-0 p-0">
                  {data?.userId?.fullName}
                  <p style={{ fontSize: '12px' }}>
                    {moment(data?.createdAt).fromNow()}
                  </p>
                </div>
              </Row>
            </Col>
            {/* --------------------DeletePost and EditPost--------------------- */}
            <Col
              md={1}
              xs={1}
              className="ps-5 mt-4"
              style={{ position: 'relative' }}
            >
              <div className={`m-auto ${styles1.moreIcon}`}>
                <div
                  style={{
                    width: '70px',
                    background: '#FFFFFF',
                    boxShadow: '0px 1px 7px rgba(0, 0, 0, 0.1)',
                    borderRadius: '10px',
                    position: 'absolute',
                    top: '20px',
                    left: '-10px',
                  }}
                  className={styles1.displayNone}
                >
                  <Col className={`p-3 ps-3 `}>
                    <Row
                      className=""
                      onClick={() => handleEdit(num, comment.text)}
                    >
                      <Col className={`m-auto ${styles.highlightText}`}>
                        <p style={{ fontSize: '13px', margin: '2px' }}>Edit</p>
                      </Col>
                    </Row>

                    <Row className="">
                      <Col
                        className={`m-auto ${styles.highlightText}`}
                        onClick={(e) => {
                          handleDelete(e, comment.id)
                        }}
                      >
                        <p style={{ fontSize: '13px', margin: '2px' }}>
                          Delete
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </div>
              </div>
            </Col>
            {/* ----------------------------------------- */}

            <Row className="mx-4 mb-3" style={{ width: '90%' }}>
              {data.text}
            </Row>
            {data?.imageUrl && (
              <Row style={{ margin: '0 20px', width: '90%' }}>
                <Image
                  alt={'Feeds pictures'}
                  src={data.imageUrl}
                  width={600}
                  height={450}
                />
              </Row>
            )}
            <Row
              className="mx-4 mb-3 mt-4"
              style={{ display: 'flex', color: '#00D9B6' }}
            >
              {data.courseName && (
                <div style={{ width: 'fit-content' }}>#{data.courseName}</div>
              )}
              {data.subjectName && (
                <div style={{ width: 'fit-content' }}>#{data.subjectName}</div>
              )}
              {data.lessonName && (
                <div style={{ width: 'fit-content' }}>#{data.lessonName}</div>
              )}
            </Row>
            <Row className="ms-5 w-50 ">
              <Col md={3} xs={3} className="pointer">
                <Row>
                  <Col md={3} xs={3} className="p-0">
                    <HandleLikes
                      data={data?.likes}
                      likesClick={() => {
                        dispatch(likeAPostToFeed(data.id, token))
                      }}
                      unlikesClick={() => {
                        dispatch(unLikeAPostToFeed(data.id, token))
                      }}
                    />
                  </Col>
                  <Col md={1} xs={1} className="ps-2">
                    {' '}
                    {<p>{data?.likes.length}</p>}
                  </Col>
                </Row>
              </Col>
              <Col md={3} xs={3}>
                <Row>
                  <Col
                    md={3}
                    xs={3}
                    className="p-0 pointer"
                    onClick={() => {
                      setMessage(message === i ? '' : i)
                    }}
                  >
                    <Image
                      alt={'Feeds pictures'}
                      src={'/assets/img/Chat (1).png'}
                      width="25px"
                      height="25px"
                    />
                  </Col>
                  <Col md={1} xs={1} className="ps-2">
                    {' '}
                    {<p>{data?.comments.length}</p>}
                  </Col>
                </Row>
              </Col>
              <Col
                md={2}
                xs={2}
                className="ps-2 pointer"
                onClick={() => {
                  setCommentPost(commentPost === i ? '' : i)
                }}
              >
                <p>Reply</p>
              </Col>
            </Row>
            {message === i && data?.comments.length > 0 && (
              <>
                <Row
                  style={{
                    borderBottom: '1px solid #a8a8a8',
                    marginLeft: '0px',
                  }}
                ></Row>
                <Row>
                  <p style={{ color: '#00D9B6' }}>Comments</p>
                </Row>
                {data?.comments.map((dat, j) => {
                  return (
                    <Row
                      key={j}
                      className="mx-1 mx-md-4 mb-3 p-md-2 p-1"
                      style={{ width: '90%' }}
                    >
                      <Row
                        style={{
                          display: 'flex',
                          margin: '10px 0',
                          padding: '0',
                        }}
                      >
                        <div style={{ width: 'fit-content' }}>
                          {data?.userId?.profilePhotoUrl !== undefined ? (
                            <Image
                              alt={'afrilearn marketing video'}
                              src={dat?.userId?.profilePhotoUrl}
                              width={35}
                              height={35}
                              className={styles.profileavatar1}
                            />
                          ) : (
                            <BsPersonCircle
                              size={35}
                              className={styles.profileavatar}
                            />
                          )}
                        </div>
                        <div
                          style={{ width: 'fit-content' }}
                          className="mt-0 p-0"
                        >
                          {dat?.userId?.fullName}
                          <p style={{ fontSize: '12px' }}>
                            {moment(dat?.createdAt).fromNow()}
                          </p>
                        </div>
                      </Row>
                      <Row className="mx-0 ps-3 mb-3 mx-md-4 ps-md-5 ">
                        {dat.text}
                      </Row>
                      <Row className="ms-0 ps-3 ms-md-5 ps-md-4 w-50  ">
                        {/* <Col md={4}>
                        <Row className="p-0"> */}
                        <Col lg={2} md={2} xs={3} className="pointer">
                          <HandleLikes
                            data={dat?.likes}
                            likesClick={() => {
                              dispatch(likeACommentPostToFeed(dat.id, token))
                            }}
                            unlikesClick={() => {
                              dispatch(unLikeACommentPostToFeed(dat.id, token))
                            }}
                          />
                        </Col>
                        <Col md={1} xs={1} className="ps-0">
                          {' '}
                          {<p>{dat?.likes.length}</p>}
                        </Col>
                        {/* </Row>
                      </Col> */}
                      </Row>
                    </Row>
                  )
                })}
              </>
            )}
            {commentPost === i && (
              <>
                <Row
                  style={{
                    borderBottom: '1px solid #a8a8a8',
                    marginLeft: '0px',
                  }}
                ></Row>
                <Row>
                  {commentImage && (
                    <input
                      type="file"
                      id="inputGroupFile02"
                      onChange={(e) => {
                        handleChangeImage(e)
                        // const data = new FormData()
                        // data.append('profilePhotoUrl', e.target.files[0])
                        // props.updateProfilePicture(data)
                        // console.log(e.target.files[0])
                        // EditPhoto(formData.append('profilePhotoUrl', e.target.files[0]))
                      }}
                      // style={{ width: '200px' }}
                    />
                  )}
                </Row>

                <Row
                  style={{
                    display: 'flex',
                    margin: '10px',
                    position: 'relative',
                  }}
                >
                  <div style={{ width: 'fit-content' }}>
                    {user?.user?.profilePhotoUrl !== undefined ? (
                      <Image
                        alt={'afrilearn marketing video'}
                        src={user?.user?.profilePhotoUrl}
                        width={35}
                        height={35}
                        className={styles.profileavatar1}
                      />
                    ) : (
                      <BsPersonCircle
                        size={35}
                        className={styles.profileavatar}
                      />
                    )}
                  </div>
                  {/* <div style={{ width: '250px' }} className="mt-2 p-0">
              {data?.userId?.fullName}
            </div> */}
                  <input
                    type="text"
                    placeholder="Post a comment"
                    value={inputComment}
                    ref={(input) => input && input.focus()}
                    onChange={(e) => {
                      setInputComment(e.target.value)
                    }}
                    style={{
                      width: '70%',
                      borderRadius: '50px',
                      marginRight: '10px',
                    }}
                  />
                  <Image
                    alt={'afrilearn marketing video'}
                    src="/assets/img/iconly.svg"
                    width={20}
                    height={20}
                    className={styles.profileavatared}
                    onClick={() => {
                      setCommentImage(!commentImage)
                    }}
                  />
                  <Image
                    alt={'afrilearn marketing video'}
                    src="/assets/img/features/dashboard/student/Send.png"
                    width="35px"
                    height="10px"
                    className={styles.profileavatared2}
                    onClick={() => {
                      postComment(data.id)
                    }}
                  />
                </Row>
              </>
            )}
          </Row>
        )
      })
  }
  const pageCount = Math.ceil(feedPost?.length / usersPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  const onEmojiClick = (emojiData, event) => {
    setInputStr((prevInput) => prevInput + emojiData.emoji)
    // setShowPicker(false)
  }

  const [courseId, setCourseId] = useState('')
  const [subjectId, setSubjectId] = useState('')
  const [topicId, setTopicId] = useState('')

  const PostFunc = () => {
    const postData = new FormData()
    //  postData.append('visibility', visibility)
    postData.append('text', inputStr)
    if (image) {
      postData.append('image', image)
    }
    if (subjectId !== '') {
      postData.append(
        'subjectId',
        feedSubjectAndCourse?.courses[courseId]?.relatedSubjects[subjectId].id
      )
      postData.append(
        'courseId',
        feedSubjectAndCourse?.courses[courseId]?.relatedSubjects[subjectId]
          .courseId
      )
    }
    if (topicId !== '') {
      postData.append(
        'titleId',
        feedSubjectAndCourse?.courses[courseId]?.relatedSubjects[subjectId]
          ?.relatedLessons[topicId].id
      )
    }
    if (inputStr !== '') {
      dispatch(addAPostToFeed(postData, token))
      setCourseId('')
      setSubjectId('')
      setTopicId('')
      setImage(false)
      setAddImage('')
      setInputStr('')
      setHashTag(false)
      setEmoji(false)
      SendFunc()
    }
  }

  return (
    <>
      <div className={styles.centercardwrapper}>
        <div className={styles.cardimagewrapper}>
          {user?.user?.profilePhotoUrl !== undefined ? (
            <Image
              alt={'afrilearn marketing video'}
              src={user?.user.profilePhotoUrl}
              width={35}
              height={35}
              className={styles.profileavatar1}
            />
          ) : (
            <BsPersonCircle size={25} className={styles.profileavatar} />
          )}
          <div className={styles.conversationline}>
            <input
              className={styles.conversationlineInput}
              type="text"
              placeholder="Start a conversation..."
              value={inputStr}
              ref={inputRef}
              onChange={(e) => {
                setInputStr(e.target.value)
              }}
            />
          </div>
        </div>
        <div className={styles.socialiconswrapper}>
          <div className={`mb-4 ${styles.iconswrapper}`}>
            <BsHash
              size={20}
              color="#00D9B6"
              onClick={() => {
                setHashTag(!hashTag)
              }}
              className="pointer"
            />
            <BsEmojiSmile
              size={20}
              color="gray"
              onClick={() => {
                setEmoji(!emoji)
              }}
              className="pointer"
            />
            <div>{emoji && <Picker onEmojiClick={onEmojiClick} />}</div>
            <Image
              src="/assets/img/iconly.svg"
              alt="student avatar"
              width={18}
              height={18}
              onClick={() => {
                setAddImage(!addImage)
              }}
              className="pointer"
            />
            {addImage && (
              <input
                type="file"
                id="inputGroupFile01"
                onChange={(e) => {
                  handleChange(e)
                  // const data = new FormData()
                  // data.append('profilePhotoUrl', e.target.files[0])
                  // props.updateProfilePicture(data)
                  // console.log(e.target.files[0])
                  // EditPhoto(formData.append('profilePhotoUrl', e.target.files[0]))
                }}
                style={{ width: '200px' }}
              />
            )}
          </div>
          <span
            className="pointer"
            onClick={() => {
              PostFunc()
            }}
          >
            {send ? 'Sending...' : 'Post'}
          </span>
        </div>
        {hashTag && (
          <div>
            <div className="m-auto w-75 mt-5" style={{ color: '#00d9b6' }}>
              {courseId !== '' &&
                '#' + feedSubjectAndCourse?.courses[courseId]?.name}
              {subjectId !== '' &&
                ' ' +
                  '#' +
                  feedSubjectAndCourse?.courses[courseId]?.relatedSubjects[
                    subjectId
                  ]?.mainSubjectId.name}{' '}
              {topicId !== '' &&
                ' ' +
                  '#' +
                  feedSubjectAndCourse?.courses[courseId]?.relatedSubjects[
                    subjectId
                  ]?.relatedLessons[topicId].title}
            </div>

            <div className={styles.innercardwrapper}>
              <div className={styles.cardonerwrapper}>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Class
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {feedSubjectAndCourse?.courses?.length > 0 &&
                      feedSubjectAndCourse.courses.map((data, i) => {
                        return (
                          <Dropdown.Item key={i} onClick={() => setCourseId(i)}>
                            {data.name}
                          </Dropdown.Item>
                        )
                      })}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className={styles.cardtworwrapper}>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Subjects
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {feedSubjectAndCourse?.courses?.length > 0 &&
                      feedSubjectAndCourse?.courses[
                        courseId
                      ]?.relatedSubjects.map((data, i) => {
                        return (
                          <Dropdown.Item
                            key={i}
                            onClick={() => setSubjectId(i)}
                          >
                            {data.mainSubjectId.name}
                          </Dropdown.Item>
                        )
                      })}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className={styles.cardthreerwrapper}>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    Topic
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {feedSubjectAndCourse?.courses?.length > 0 &&
                      feedSubjectAndCourse?.courses[courseId]?.relatedSubjects[
                        subjectId
                      ]?.relatedLessons.map((data, i) => {
                        return (
                          <Dropdown.Item key={i} onClick={() => setTopicId(i)}>
                            {data.title}
                          </Dropdown.Item>
                        )
                      })}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="App">
        <Post />
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          style={{ margin: 'auto', textAlign: 'center', marginTop: '20px' }}
        />
      </div>
    </>
  )
}

export default CenterCard

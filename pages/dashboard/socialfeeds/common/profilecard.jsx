import Image from 'next/image'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'

import { BsPersonCircle, BsShieldFillCheck } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAllFeedUsers,
  fetchFollowersFeedUsers,
  fetchFollowingsFeedUsers,
  PatchFollowFeedUsers,
} from '../../../../redux/actions/subject'
import styles from '../../../../styles/search.module.css'

const Profilecard = () => {
  const { user } = useSelector((state) => state.auth)
  const { followings, follower } = useSelector((state) => state.mySubjectCourse)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFollowingsFeedUsers(token))
  }, [fetchFollowingsFeedUsers])
  useEffect(() => {
    dispatch(fetchAllFeedUsers())
  }, [fetchAllFeedUsers])

  const token = user?.token
  const refresh = (data) => {
    dispatch(PatchFollowFeedUsers(data, token))
    //     dispatch(fetchFollowingsFeedUsers(token))
  }
  const capitalizeWords = (arr) => {
    return arr
      .split(' ')
      .map((word) => {
        return word[0]?.toUpperCase() + word.substring(1)
      })
      .join(' ')
  }
  const [show, setShow] = useState('')

  const FollowerFunc = ({ follow, unFollow = false }) => {
    return follow
      ? follow?.map((data, i) => {
          return (
            <div key={i} className={styles.avatarfollowcardwrapper}>
              {data && data?.userId?.profilePhotoUrls ? (
                <Image
                  src={data.userId.profilePhotoUrl}
                  alt="student avatar"
                  width="30px"
                  height="30px"
                  // className={styles.avatarProfile}
                />
              ) : (
                <p className={styles.fullNameAvatar}>
                  {data &&
                    data?.userId?.fullName &&
                    data?.userId?.fullName.slice(0, 2).toUpperCase()}
                </p>
              )}

              <span>
                {data?.userId?.fullName
                  ? capitalizeWords(data?.userId?.fullName)
                  : 'Anonymous'}
                {data?.userId?.role.id === '5fd08fba50964811309722d5' ? (
                  <BsShieldFillCheck color="green" size={12} />
                ) : data?.userId?.role.id === '602f3ce39b146b3201c2dc1d' ? (
                  <BsShieldFillCheck color="yellow" size={12} />
                ) : data?.userId?.role.id === '607ededa2712163504210684' ? (
                  <BsShieldFillCheck color="blue" size={12} />
                ) : (
                  ''
                )}
              </span>
              {unFollow && (
                <Button
                  className="pointer"
                  onClick={() => {
                    refresh(data?.userId?._id)
                  }}
                >
                  <p style={{ padding: '0', margin: '0' }}>Unfollow</p>
                </Button>
              )}
            </div>
          )
        })
      : ''
  }

  return (
    <div className={styles.profilecardwrapper}>
      <div className={`mx-3 ${styles.shieltitlewrapper}`}>
        <h3>My Profile</h3>
        {user?.user?.role === '5fd08fba50964811309722d5' ? (
          <BsShieldFillCheck color="green" size={20} />
        ) : user?.user?.role === '602f3ce39b146b3201c2dc1d' ? (
          <BsShieldFillCheck color="yellow" size={20} />
        ) : user?.user?.role === '607ededa2712163504210684' ? (
          <BsShieldFillCheck color="blue" size={20} />
        ) : (
          ''
        )}
      </div>
      <div className={styles.avatarwrapper}>
        <div
          className={`mt-3 pointer ${styles.inneravatarwrapper}`}
          onClick={() => setShow(show === 0 ? '' : 0)}
        >
          <Image
            alt={'afrilearn marketing video'}
            src={
              user?.user?.profilePhotoUrl
                ? user?.user?.profilePhotoUrl
                : `/assets/img/features/dashboard/student/woman.png`
            }
            width={35}
            height={35}
            // className={styles.profileAvatar1}
            style={{ borderRadius: '50px', width: '50px' }}
          />

          <span>{user?.user?.fullName}</span>
        </div>
        <div
          style={{
            margin: '25px 0 15px',
            display: show === 0 ? 'block' : 'none',
          }}
        >
          <Row>
            <Col>{user?.user?.email}</Col>
          </Row>
          <Row className="mt-4">
            <Col md={4}>Class:</Col>
            <Col style={{ fontSize: '15px' }}>
              {user?.user?.enrolledCourses[0] &&
                user?.user?.enrolledCourses[0].courseId.name}
            </Col>
          </Row>
          <Row>
            <Col md={4}> Role:</Col>
            <Col style={{ fontSize: '15px' }}>
              {' '}
              {user?.user?.role === '5fd08fba50964811309722d5' ? (
                <BsShieldFillCheck color="green" size={12} />
              ) : user?.user?.role === '602f3ce39b146b3201c2dc1d' ? (
                <BsShieldFillCheck color="yellow" size={12} />
              ) : user?.user?.role === '607ededa2712163504210684' ? (
                <BsShieldFillCheck color="blue" size={12} />
              ) : (
                ''
              )}{' '}
              {user?.user?.role === '5fd08fba50964811309722d5'
                ? 'Student'
                : user?.user?.role === '602f3ce39b146b3201c2dc1d'
                ? 'Teacher'
                : user?.user?.role === '607ededa2712163504210684'
                ? 'Parent'
                : ''}
            </Col>
          </Row>
          <Row>
            <Col md={4}>My Rank:</Col>
            <Col>
              <Image
                alt={'afrilearn marketing video'}
                src="/assets/img/OneStartGeneral.svg"
                width={18}
                height={18}
                className={styles.profileavatar1}
              />
              <span style={{ fontSize: '15px' }}>One Star General</span>
            </Col>
          </Row>
          <Row>
            <Col md={5}>My Points:</Col>
            <Col style={{ fontSize: '15px' }}>1000 points</Col>
          </Row>
        </div>
        <div className={`pointer ${styles.followerwrapper}`}>
          {
            <div
              className={styles.followerinnerwrapper}
              onClick={() => setShow(show === 1 ? '' : 1)}
            >
              <h5 style={{ color: '#A8A8A8' }}>Followers</h5>
              <h5 style={{ color: '#00D9B6', textAlign: 'center' }}>
                {follower?.followers?.length}
              </h5>
            </div>
          }
          {
            <div
              className={`pointer ${styles.followinginnerwrapper}`}
              onClick={() => setShow(show === 2 ? '' : 2)}
            >
              <h5 style={{ color: '#A8A8A8' }}>Following</h5>
              <h5 style={{ color: '#00D9B6', textAlign: 'center' }}>
                {followings?.followings?.length}
              </h5>
            </div>
          }
        </div>
        <div>
          {show === 2 &&
            followings &&
            (followings?.followings?.length > 0 ? (
              <FollowerFunc follow={followings?.followings} unFollow={true} />
            ) : (
              <div>
                You have no Following at the moment, you can follow people in
                connections
              </div>
            ))}
          {show === 1 &&
            follower &&
            (follower?.followers.length > 0 ? (
              <FollowerFunc follow={follower?.followers} unFollow={false} />
            ) : (
              <div>
                You have no Follower, you can follow people in connections
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Profilecard

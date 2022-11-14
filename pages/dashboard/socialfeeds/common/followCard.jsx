import Image from 'next/image'
import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { BsShieldFillCheck } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAllFeedUsers,
  fetchFollowersFeedUsers,
  fetchFollowingsFeedUsers,
  PatchFollowFeedUsers,
} from '../../../../redux/actions/subject'

import styles from '../../../../styles/search.module.css'

const FollowCard = () => {
  const { user } = useSelector((state) => state.auth)
  const token = user?.token
  const dispatch = useDispatch()
  const refresh = (data) => {
    dispatch(PatchFollowFeedUsers(data, token))
    //     dispatch(fetchFollowingsFeedUsers(token))
  }
  useEffect(() => {
    dispatch(fetchFollowingsFeedUsers(token))
  }, [fetchFollowingsFeedUsers])
  useEffect(() => {
    dispatch(fetchAllFeedUsers())
    dispatch(fetchFollowersFeedUsers(token))
  }, [fetchAllFeedUsers, fetchFollowersFeedUsers])
  const capitalizeWords = (arr) => {
    return arr
      .split(' ')
      .map((word) => {
        return word[0]?.toUpperCase() + word.substring(1)
      })
      .join(' ')
  }
  const { feedUsers, followings, follower } = useSelector(
    (state) => state.mySubjectCourse
  )
  // console.log(feedUsers)
  // console.log(followings, follower)

  return (
    <div className={styles.followcardwrapper}>
      <div className={styles.innerfollowcardwrapper}>
        <h4>Who to follow</h4>
      </div>
      {feedUsers?.users?.map((data, i) => {
        return (
          <div key={i} className={styles.avatarfollowcardwrapper}>
            {data && data.profilePhotoUrl ? (
              <Image
                src={data.profilePhotoUrl}
                alt="student avatar"
                width={30}
                height={30}
                className={styles.avatarProfile}
              />
            ) : (
              <p className={styles.fullNameAvatar}>
                {data &&
                  data?.fullName &&
                  data?.fullName.slice(0, 2).toUpperCase()}
              </p>
            )}

            <span>
              {data?.fullName ? capitalizeWords(data?.fullName) : 'Anonymous'}
              {data?.role === '5fd08fba50964811309722d5' ? (
                <BsShieldFillCheck color="green" size={12} />
              ) : data?.role === '602f3ce39b146b3201c2dc1d' ? (
                <BsShieldFillCheck color="yellow" size={12} />
              ) : data?.role === '607ededa2712163504210684' ? (
                <BsShieldFillCheck color="blue" size={12} />
              ) : (
                ''
              )}
            </span>
            <Button
              className="pointer"
              onClick={() => {
                refresh(data?._id)
              }}
            >
              {followings?.followings?.filter((datas) => {
                return datas?.userId?.id === data._id
              }).length === 0
                ? 'Follow'
                : 'Unfollow'}
            </Button>
          </div>
        )
      })}
    </div>
  )
}

export default FollowCard

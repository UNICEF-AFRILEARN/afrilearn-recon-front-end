import { useEffect, useState } from 'react'
import { Button, Col, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import { BsShieldFillCheck } from 'react-icons/bs'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import {
  allUserInFeed,
  PatchFollowFeedUsers,
  storeInputChange,
} from '../../../../redux/actions/subject'
import styles from '../../../../styles/search.module.css'
import CenterCard from './centerCard'

const CenterFeed = () => {
  const dispatch = useDispatch()
  const { searchUser, filterRole } = useSelector(
    (state) => state.mySubjectCourse
  )
  const { user } = useSelector((state) => state.auth)
  const searchedContent = searchUser?.users?.filter((data) => {
    return data?.id !== user?.user?._id
  })
  const searchContent = searchedContent?.filter((data) => {
    return filterRole !== ''
      ? data?.role?.id === filterRole || data?.role === filterRole
      : data?.role?.id !== filterRole || data?.role !== filterRole
  })
  const { switched } = useSelector((state) => state.mySubjectCourse)

  const token = user?.token
  useEffect(() => {
    dispatch(allUserInFeed())
  }, [allUserInFeed])

  const refresh = (data) => {
    dispatch(PatchFollowFeedUsers(data, token))
    // dispatch(allUserInFeed())
    dispatch(storeInputChange('changeText', ''))
    dispatch(allUserInFeed())

    //     dispatch(fetchFollowingsFeedUsers(token))
  }
  const { followings } = useSelector((state) => state.mySubjectCourse)
  const capitalizeWords = (arr) => {
    return arr
      .split(' ')
      .map((word) => {
        return word[0]?.toUpperCase() + word.substring(1)
      })
      .join(' ')
  }
  const [pageNumber, setPageNumber] = useState(0)

  const usersPerPage = 30
  const pagesVisited = pageNumber * usersPerPage
  const pageCount = Math.ceil(searchContent?.length / usersPerPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
  const UserFunc = () => {
    return (
      <div className={styles.followcardwrapper}>
        {searchContent?.length > 0 ? (
          searchContent
            ?.slice(pagesVisited, pagesVisited + usersPerPage)
            .map((data, i) => {
              return (
                <div key={i} className="mt-3">
                  <Row>
                    <Col md={2}>
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
                    </Col>
                    <Col md={7}>
                      <span>
                        {data?.fullName
                          ? capitalizeWords(data?.fullName)
                          : 'Anonymous'}{' '}
                        {data?.role?.id === '5fd08fba50964811309722d5' ||
                        data?.role === '5fd08fba50964811309722d5' ? (
                          <BsShieldFillCheck color="green" size={12} />
                        ) : data?.role?.id === '602f3ce39b146b3201c2dc1d' ||
                          data?.role === '602f3ce39b146b3201c2dc1d' ? (
                          <BsShieldFillCheck color="yellow" size={12} />
                        ) : data?.role?.id === '607ededa2712163504210684' ||
                          data?.role === '607ededa2712163504210684' ? (
                          <BsShieldFillCheck color="blue" size={12} />
                        ) : (
                          ''
                        )}
                      </span>
                    </Col>
                    <Col md={3}>
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
                    </Col>
                  </Row>
                </div>
              )
            })
        ) : (
          <div className="mt-5"> No user Available</div>
        )}
      </div>
    )
  }
  return (
    <div className={styles.centerfeedwrapper}>
      {switched === 1 ? (
        <>
          <div className={styles.maintitlewrapper}>
            <h4>My Feeds</h4>
          </div>
          <CenterCard />
        </>
      ) : (
        <>
          <div className={styles.maintitlewrapper}>
            <h4>Connections</h4>
            <UserFunc />
            {searchContent?.length > 30 && (
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
                style={{
                  margin: 'auto',
                  textAlign: 'center',
                  marginTop: '20px',
                }}
              />
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default CenterFeed

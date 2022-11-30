import React from 'react'

import {
  BsShieldFillCheck,
  BsFillEyeSlashFill,
  BsFillEyeFill,
} from 'react-icons/bs'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'
import { RiCheckboxBlankFill } from 'react-icons/ri'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import styles from '../../../../styles/search.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storeInputChange } from '../../../../redux/actions/subject'

const Feedcard = () => {
  const [clicks, setClicks] = useState(1)
  const dispatch = useDispatch()
  const { switched } = useSelector((state) => state.mySubjectCourse)

  return (
    <div className={styles.feedcardwrapper}>
      <div className={styles.innerfeedonewrapper}>
        {switched === 1 ? (
          <h4>My Feeds</h4>
        ) : (
          <h5 onClick={() => dispatch(storeInputChange('switched', 1))}>
            My Feeds
          </h5>
        )}
        {switched === 2 ? (
          <h4>Connections</h4>
        ) : (
          <h5 onClick={() => dispatch(storeInputChange('switched', 2))}>
            Connections
          </h5>
        )}
        {/* <ul>
          <li
            style={{
              fontWeight: '500',
              fontSize: '20px',
              lineHeight: '30px',
              color: '#A8A8A8',
            }}
          >
            Connections
          </li>
        </ul> */}
      </div>
      <div className={styles.innerfeedtwowrapper}>
        <ul>
          <li
            style={{
              color: '#A8A8A8',
            }}
          >
            {clicks === 1 ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}{' '}
            <span className="ms-2">Post Visibility</span>
          </li>
          <li onClick={() => setClicks(1)} className="pointer d-flex">
            {' '}
            <span>
              {clicks === 1 ? (
                <RiCheckboxBlankFill color="green" />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
            </span>
            <span className="ms-2" style={{ color: '#333333' }}>
              Public (Everyone sees my post)
            </span>
          </li>
          <li onClick={() => setClicks(2)} className="pointer d-flex">
            <span>
              {' '}
              {clicks === 2 ? (
                <RiCheckboxBlankFill color="green" />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
            </span>
            <span className="ms-2" style={{ color: '#333333' }}>
              Private (Only my followers)
            </span>
          </li>
        </ul>
      </div>
      <div className={styles.innerfeedthreewrapper}>
        <ul>
          <li style={{ color: '#A8A8A8' }}>
            <AiOutlineUsergroupAdd />{' '}
            <span className="ms-2">Role Indicator</span>
          </li>
          <li>
            <BsShieldFillCheck color="green" />{' '}
            <span className="ms-2" style={{ color: '#333333' }}>
              Student
            </span>{' '}
          </li>
          <li>
            <BsShieldFillCheck color="yellow" />{' '}
            <span className="ms-2" style={{ color: '#333333' }}>
              Teacher
            </span>{' '}
          </li>
          <li>
            <BsShieldFillCheck color="blue" />{' '}
            <span className="ms-2" style={{ color: '#333333' }}>
              School
            </span>{' '}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Feedcard

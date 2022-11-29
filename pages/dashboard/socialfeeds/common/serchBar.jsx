import React, { useState, useRef } from 'react'
import styles from '../../../../styles/search.module.css'

import { BsSearch } from 'react-icons/bs'
import {
  Col,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Row,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  allUserInFeed,
  searchForPostsInFeed,
  searchForUserInFeed,
  storeInputChange,
} from '../../../../redux/actions/subject'

const SearchBar = () => {
  const { user } = useSelector((state) => state.auth)
  const { changeText } = useSelector((state) => state.mySubjectCourse)
  const { switched } = useSelector((state) => state.mySubjectCourse)

  const token = user?.token
  const dispatch = useDispatch()
  const [text, setText] = useState(changeText)
  const inputRef = useRef()
  const handleSearch = () => {
    data
      ? dispatch(searchForPostsInFeed(text, token))
      : dispatch(searchForUserInFeed(text, token))
    setText('')
  }

  const [items, setItems] = useState('')
  const roles = {
    Student: '5fd08fba50964811309722d5',
    Teacher: '602f3ce39b146b3201c2dc1d',
    Parent: '606ed82e70f40e18e029165e',
    School: '607ededa2712163504210684',
  }

  return (
    <div className={styles.searchwrapper}>
      {switched === 1 ? (
        <InputGroup className="mb-3" outline="none">
          <InputGroup.Text id="basic-addon1">
            <BsSearch
              className="pointer"
              onClick={() => {
                handleSearch()
              }}
            />
          </InputGroup.Text>
          <Form.Control
            placeholder="Use # to search post"
            aria-label="Use # to search post"
            aria-describedby="basic-addon1"
            className="shadow-none"
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
        </InputGroup>
      ) : (
        <Row>
          <Col md={4}>
            <DropdownButton
              id="dropdown-basic-button"
              title="All roles"
              className=""
            >
              <Dropdown.Item
                onClick={() => dispatch(storeInputChange('filterRole', ''))}
              >
                All Users
              </Dropdown.Item>
              {Object.entries(roles)?.map(([key, values], i) => (
                <Dropdown.Item
                  key={i}
                  onClick={() =>
                    dispatch(storeInputChange('filterRole', values))
                  }
                >
                  {key}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Col>
          <Col>
            <InputGroup className="mb-3" outline="none">
              <InputGroup.Text id="basic-addon1">
                <BsSearch className="pointer" />
              </InputGroup.Text>
              <Form.Control
                placeholder="Seach Users"
                aria-label="Seach Users"
                aria-describedby="basic-addon1"
                className="shadow-none"
                value={changeText}
                ref={inputRef}
                onChange={(e) => {
                  dispatch(storeInputChange('changeText', e.target.value))
                  changeText !== '' || changeText.length > 0
                    ? handleSearch(e.target.value)
                    : dispatch(allUserInFeed())
                  setText(e.target.value)
                }}
                onMouseEnter={() =>
                  dispatch(storeInputChange('filterRole', ''))
                }
              />
            </InputGroup>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default SearchBar

import React, { useState } from 'react'
import styles from '../../../../styles/search.module.css'

import { BsSearch } from 'react-icons/bs'
import { Form, InputGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { searchForPostsInFeed } from '../../../../redux/actions/subject'

const SearchBar = () => {
  const { user } = useSelector((state) => state.auth)
  const token = user?.token
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const handleSearch = () => {
    dispatch(searchForPostsInFeed(text, token))
    setText('')
  }
  return (
    <div className={styles.searchwrapper}>
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
    </div>
  )
}

export default SearchBar

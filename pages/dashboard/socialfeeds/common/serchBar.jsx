import React from 'react';
import styles from '../../../../styles/search.module.css';

import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  return (
    <div className={styles.searchwrapper}>
        <div className={styles.searchicon}>
            <BsSearch />
        </div>
            <span>Use # to search post</span>
    </div>
  )
}

export default SearchBar
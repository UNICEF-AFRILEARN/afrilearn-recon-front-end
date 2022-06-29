import React from 'react';
import SearchBar from './common/serchBar';

import styles from '../../../styles/search.module.css';

const SocialFeeds = () => {
  return (
    <div className={styles.socialfeedwrapper}>
        <div >
            <SearchBar />
        </div>
    </div>
  )
}

export default SocialFeeds
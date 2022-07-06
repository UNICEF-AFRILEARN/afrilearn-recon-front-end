import React from 'react';
import SearchBar from './common/serchBar';

import styles from '../../../styles/search.module.css';
import Feedholder from './common/feedholder';
import CenterFeed from './common/centerFeed';
import LeftFeeds from './common/leftFeeds';

const SocialFeeds = () => {
  return (
    <div className={styles.socialfeedwrapper}>
        <div className={styles.searchbarinnerwrapper}>
            <SearchBar />
        </div>
        <div className={styles.contentwrapper}>
            <div className={styles.leftfeedwrapper}>
                <Feedholder />
            </div>
            <div className={styles.middlecontentwrapper}>
                <CenterFeed />
            </div>
            <div className={styles.rightfeedwrapper}>
                <LeftFeeds />
            </div>
        </div>
    </div>
  )
}

export default SocialFeeds
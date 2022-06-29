import React from 'react';

import styles from '../../../styles/search.module.css';
import CenterFeed from '../socialfeeds/common/centerFeed';
import Feedholder from '../socialfeeds/common/feedholder';
import LeftFeeds from '../socialfeeds/common/leftFeeds';
import SearchBar from '../socialfeeds/common/serchBar';

const Socialconnection = () => {
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
                <LeftFeeds />
            </div>
            <div className={styles.rightfeedwrapper}>
                <LeftFeeds />
            </div>
        </div>
    </div>
  )
}

export default Socialconnection
import React from 'react';

import styles from '../../../../styles/search.module.css';

const Feedcard = () => {
  return (
    <div className={styles.feedcardwrapper}>
        <div className={styles.innerfeedonewrapper}>
              <span>|</span>  <h4>My Feeds</h4>
              <h4>Connections</h4>
        </div>
        <div className={styles.innerfeedtwowrapper}>

        </div>
        <div className={styles.innerfeedthreewrapper}>

        </div>
    </div>
  )
}

export default Feedcard
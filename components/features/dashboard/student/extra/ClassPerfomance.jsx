import React from 'react';
import styles from '../../../../../styles/performance.module.css';
import PieChartSection from './PieChartSection';

const ClassPerfomance = () => {
  return (
    <div className={styles.performancemainwrapper}>
      <div className={styles.leftwrapper}>
          <div className={styles.studentnamewrapper}>
              <h2>Alaka Feyikemi</h2>
                <p>feyikemi199@gmail.com</p>
              <h3>JSS 1</h3>
          </div>
          <div className={styles.progresswrapper}>
              <h1>Progress</h1>
          </div>
      </div>
      <div className={styles.piewrapper}>
        <h1>het</h1>
        <PieChartSection />
      </div>
    </div>
  )
}

export default ClassPerfomance
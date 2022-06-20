import React from 'react';
import styles from '../../../../../styles/performance.module.css';
import BarChartSect from './BarChartSect';
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
             <BarChartSect />
          </div>
      </div>
      <div className={styles.piewrapper}>
        <PieChartSection />
      </div>
    </div>
  )
}

export default ClassPerfomance
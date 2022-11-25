import React from 'react'
import styles from '../extra/chart.module.css'
import { Doughnut } from 'react-chartjs-2'
import Permsumpiechart from './permsumpiechart'

import {
  Chart as ChartJs,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js'
import SubHeading from './subHeading'
import { Col, Row } from 'react-bootstrap'

ChartJs.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend)
ChartJs.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend)

const PerfomanceSumm = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['#A2DBB1', '#A6A6A6', '#EDB68B', '#B0C4DA'],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
  }

  return (
    <>
      <SubHeading title="Performance Summary" />

      <Row className={`mb-5 ${styles.parentcontainer}`}>
        <Col lg={2} md={4} className={` ${styles.chartcard}`}>
          {/* <Doughnut data={data} width={300} height={300} options={options} /> */}
          <Permsumpiechart />
        </Col>
        <Col lg={2} md={8} className={styles.bardetails}>
          <h5 className={styles.colorone}>Excelling In</h5>
          <h5 className={styles.colortwo}>Average In</h5>
          <h5 className={styles.colorthree}>Below Average In</h5>
          <h5 className={styles.colorfour}>No rating</h5>
        </Col>
        <Col lg={5} md={12}>
          <div className={styles.listlinewrapper}>
          <div className={styles.topmath}>
            
          </div>
          <div className={styles.topmath}>
           
          </div>
          <div className={styles.topmath}>
           
          </div>
          <div className={styles.topmath}>
            <span>Mathematics</span> |<span>Civic Education</span> |
            <span>Computer Science </span> |<span>Basic Science</span> |
            <span>Mathematics</span> |<span>Civic Education</span> |
            <span>Computer Science </span> |<span>Basic Science</span> |
          </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default PerfomanceSumm

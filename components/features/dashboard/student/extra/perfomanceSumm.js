import React from 'react';
import styles from "../extra/chart.module.css";

import {
    Chart as ChartJs,
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';

import { Doughnut } from "react-chartjs-2"

ChartJs.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)


const PerfomanceSumm = () => {

const  data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                '#A2DBB1',
                '#A6A6A6',
                '#EDB68B',
                '#B0C4DA',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                
            ],
            borderWidth: 1
        }]
    }

    const options = {
       maintainAspectRatio: false,
       legend: {
        display: false,
        
    }
    }


    return (
        <>
            <div className={styles.overallcomp}>
                <h1>Performance Summary</h1>
            </div>
         <div className={styles.parentcontainer}>
        
         <div className={styles.chartcard}>
            <Doughnut data={data} width={300} height={300} options={options} />
         </div>
         <div className={styles.bardetails}>
            <h5 className={styles.colorone}>Excelling In</h5>
            <h5 className={styles.colortwo}>Average In</h5>
            <h5 className={styles.colorthree}>Below Average In</h5>
            <h5 className={styles.colorfour}>No rating</h5>
         </div>
         <div>
            <div className={styles.topmath}><p>Mathematics</p><p>Civic Education</p><p>Computer Science</p><p>Basic Science</p>
            </div>
            <div className={styles.topmath}><p>Mathematics</p><p>Civic Education</p><p>Computer Science</p><p>Basic Science</p>
            </div>
            <div className={styles.topmath}><p>Mathematics</p><p>Civic Education</p><p>Computer Science</p><p>Basic Science</p>
            </div>
            <div className={styles.topmath}><p>Mathematics</p><p>Civic Education</p><p>Computer Science</p><p>Basic Science</p>
            </div>
           
         </div>
         
     </div>
     </>
    )
  }

export default PerfomanceSumm
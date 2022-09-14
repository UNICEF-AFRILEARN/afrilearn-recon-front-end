import React from 'react';
// import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'react-chartjs-2';
// import { Pie} from 'chart.js';
import {Chart, ArcElement} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
Chart.register(ArcElement);
// ChartJs.register(
//   Tooltip, Title, ArcElement, Legend
// )

const options = {
  cutoutPercentage: 70,
};

const data = {
  datasets:[{
    barPercentage: 0.5,
    barThickness: 6,
    maxBarThickness: 8,
    minBarLength: 2,
    data:[10, 20, 30, 50, 60]
  }],

  labels:[
    "Red",
    "Yellow",
    "Green"
  ]
};

const Barchart = () => {
  return (
    <div>
           <Doughnut data={data} />
    </div>
  )
}

export default Barchart
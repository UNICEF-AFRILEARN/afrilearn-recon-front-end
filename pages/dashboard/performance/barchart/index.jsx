import React from 'react';
// import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'react-chartjs-2';
// import { Pie} from 'chart.js';
import {Chart, ArcElement} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
Chart.register(ArcElement);
// ChartJs.register(
//   Tooltip, Title, ArcElement, Legend
// )

const data = {
  datasets:[{
    data:[10, 20, 30]
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
           <Doughnut data={data}/>
    </div>
  )
}

export default Barchart
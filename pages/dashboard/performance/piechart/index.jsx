// import React from 'react';
// // import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'react-chartjs-2';
// // import { Pie} from 'chart.js';
// import {Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,} from 'chart.js'
// import { Bar } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: false,
//       text: 'Chart.js Bar Chart',
//     },
//   },
// };

// const data = {
//   datasets:[{
//     barPercentage: 0.5,
//     barThickness: 7,
//     maxBarThickness: 8,
//     minBarLength: 2,
//     data:[10, 20, 30, 50, 60,50, 60,50, 60]
//   }],

//   labels:[
//     "Red",
//     "Yellow",
//     "Yellow",
//     "Yellow",
//     "Yellow",
//     "Yellow",
//     "Yellow",
//     "Yellow",
//     "Green"
//   ]
// };

// const Piechart = () => {
//   return (
//     <div>
//           <Bar options={options} data={data} />
//     </div>
//   )
// }

// export default Piechart

import React from 'react';
import { BarChart, Bar, Cell, XAxis, Label, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Piechart = () => {
    return (
      // <ResponsiveContainer width="50%" height="50%">
        <BarChart width={400} height={350} data={data}>
          <Bar dataKey="uv" fill="#8884d8" 
          />
          
        </BarChart>
      //  </ResponsiveContainer>
    );
  }

export default Piechart
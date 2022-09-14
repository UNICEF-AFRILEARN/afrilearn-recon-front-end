// import React from 'react';
// // import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'react-chartjs-2';
// // import { Pie} from 'chart.js';
// import {Chart, ArcElement} from 'chart.js'
// import { Doughnut } from 'react-chartjs-2';
// Chart.register(ArcElement);
// // ChartJs.register(
// //   Tooltip, Title, ArcElement, Legend
// // )

// const options = {
//   cutoutPercentage: 70,
// };

// const data = {
//   datasets:[{
//     barPercentage: 0.5,
//     barThickness: 6,
//     maxBarThickness: 8,
//     minBarLength: 2,
//     data:[10, 20, 30, 50, 60]
//   }],

//   labels:[
//     "Red",
//     "Yellow",
//     "Green"
//   ]
// };

// const Barchart = () => {
//   return (
//     <div>
//            <Doughnut data={data} />
//     </div>
//   )
// }

// export default Barchart

import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Barchart = () => {
    return (
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx={85}
          cy={90}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }

export default Barchart
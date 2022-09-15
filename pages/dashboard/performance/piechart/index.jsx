

import React from 'react';
import { BarChart, Bar, Cell, XAxis, Label, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

// const data = [
//   {
//     name: 'A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//     per: 30,
//   },
//   {
//     name: 'B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//     per: 50,
//   },
//   {
//     name: 'C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//     per: 60,
//   },
//   {
//     name: 'D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//     per: 30,
//   },
//   {
//     name: 'English',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//     per: 100,
//   },
//   {
//     name: 'F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//     per: 80,
//   },
//   {
//     name: 'G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//     per: 40,
//   },
//   {
//     name: 'G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//     per: 40,
//   },
//   {
//     name: 'WG',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//     per: 60,
//   },
//   {
//     name: 'JKG',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//     per: 60,
//   },
// ];

const Piechart = ({data}) => {
  console.log("data from pie", data)
    return (
      // <ResponsiveContainer width="50%" height="50%">
        <BarChart width={400} height={350} data={data}>
          <Bar dataKey="progress" fill="#8884d8"
            radius={[20, 20, 20, 20]}
            barSize={28}
            // label={{ position: 'baseline'}}

            
          />
          
           <XAxis 
           dataKey='subject'
           fontFamily="sans-serif"
           tickSize
           angle={-90}
          dx={-10}
          dy={15}
          minTickGap={-200}
          axisLine={false}
          interval={0}
       />
       <YAxis hide/>
          
        </BarChart>
      //  </ResponsiveContainer>
    );
  }

export default Piechart
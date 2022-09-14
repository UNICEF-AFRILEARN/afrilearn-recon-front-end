import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 700 },
  { name: 'Group B', value: 300 },
];
const COLORS = ['#0088FE', '#00C49F'];

const Barchart = () => {
    return (
      <PieChart width={200} height={162}>
        <Pie
          data={data}
          cx={85}
          cy={74}
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
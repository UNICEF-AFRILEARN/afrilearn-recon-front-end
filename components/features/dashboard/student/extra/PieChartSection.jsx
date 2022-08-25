import React from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
// import styles from '../../../../../styles/chart.module.css';



const PieChartSection = () => {
  const data = [
    { name: "Facebook", users: 2000000000 },
    { name: "Instagram", users: 1500000000 },
    { name: "Twiter", users: 1000000000 },
    { name: "Telegram", users: 500000000 },
  ];

  return (
    <div >
      <div style={{ textAlign: "center" }}>
      <h1>Overall</h1>
      <div className="App">
        {/* <PieChart width={400} height={400}> */}
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            label
          />
          <Tooltip />
        {/* </PieChart> */}
      </div>
    </div>
    </div>  

  )
}

export default PieChartSection
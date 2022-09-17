import React from 'react';
import { BarChart, Bar, Cell, XAxis, Label, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';


const Piechart = ({data}) => {
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
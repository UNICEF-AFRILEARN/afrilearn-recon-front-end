import React from 'react';
import { BarChart, Bar, Cell, XAxis, Label, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';


const Piechart = ({data}) => {
  console.log("Data from +++++++++======>", data)
    return (
      // <ResponsiveContainer width="50%" height="50%">
        <BarChart 
        width={400} 
        height={350} 
        data={data}
        margin={{top: 20, right: 30, left: 20, bottom: 165}}
        >
          <Bar dataKey="progress" fill="#8884d8"
            radius={[20, 20, 20, 20]}
            barSize={28}
            
            // stackOffset="sign"
            // margin={{
            //   top: 5,
            //   right: 30,
            //   left: 20,
            //   bottom: 5,
            // }}
            // label={{ position: 'baseline'}}

            
          />
          
           <XAxis 
          dataKey='subject'
          fontFamily="sans-serif"
          
          tickSize
          angle={-90}
          dx={-8}
          dy={5}
          minTickGap={-200}
          axisLine={false}
          interval={0}
          textAnchor="end"
          scaleToFit={true}
          orientation='bottom'
          
       />
       <YAxis hide/>
          
        </BarChart>
      //  </ResponsiveContainer>
    );
  }

export default Piechart
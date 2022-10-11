import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Label, LabelList, Cell, ResponsiveContainer } from 'recharts';



const COLORS = ['#0088FE', '#00C49F'];

const Barchart = ({subjectPerformance, subjectList, outerIndex, perform}) => {
const [subject, setSubject] = useState([]);

console.log("subjectPerformance", subjectPerformance)

  let dataTwo = [
    // ...subjectPerformance,
    {name: 'test', totalTests: 100 ?? 0},
  ]

  let data = [ 
    // { name: 'totalQuestionsCorrect', value: subjectPerformance[outerIndex].performance
    // ?? 0 , total: 0, fill: 'green' },
    { name: 'totalQuestionsCorrect', value: 100, fill: 'blue' },
];



useEffect(() => {
  setSubject(subjectList)
}, [])

  console.log("dataTwo subjectList from barchart", dataTwo
  )

    return (
      
      <PieChart width={200} height={162}>
        <Pie
          // activeIndex={activeIndex}
          // activeShape={renderActiveShape}
          data={data}
          cx={85}
          cy={74}
          textAnchor={"middle"}
          innerRadius={60}
          outerRadius={80}
          labelLine={false}
          fill="fill"
          paddingAngle={1}
          dataKey="value"
          labelPosition={60}
        >
         {dataTwo.map((entry, index) => {
      if (index === 0 && outerIndex === 0 ) {
        return <Cell key={`cell-${index}`} fill="red"/>; 
        // make sure to map the outerIndex to the colour you want
      }
      if (index === 1) {
        return <Cell key={`cell-${index}`} fill="grey"/>;  // make sure to map the outerIndex to the colour you want
      }
      if (index === 2 || outerIndex === 2) {
        return <Cell key={`cell-${index}`} fill="blue"/>;  // make sure to map the outerIndex to the colour you want
      }
      if ( outerIndex === 3) {
        return <Cell key={`cell-${index}`} fill="yellow"/>;  // make sure to map the outerIndex to the colour you want
      }
      if ( outerIndex === 1) {
        return <Cell key={`cell-${index}`} fill="orange"/>;  // make sure to map the outerIndex to the colour you want
      }

        return <Cell key={`cell-${index}`} fill="grey" />;
      
    })}
       <Label
        // value={`${subjectPerformance[outerIndex].performance?? 0}%`}
       position="center"
       fill="grey"
       style={{
         fontSize: "30px",
         fontWeight: "bold",
         fontFamily: "Roboto"
       }}
     />
        </Pie>
      </PieChart>
    );
  }

export default Barchart
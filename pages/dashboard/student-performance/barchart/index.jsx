import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Label, LabelList, Cell, ResponsiveContainer } from 'recharts';



const COLORS = ['#0088FE', '#00C49F'];

const Barchart = ({subjectPerformance, subjectList}) => {
const [subject, setSubject] = useState([]);



//function to map through the subject and progress

const getSUbject = (obj) => {
  for(let i = 0; i < obj.length; i++){
    setSubject(obj[i].subject)
    console.log("here", subject)
  }
  return subject
}
    // console.log("datadatadata ===>", data)
  // let totalQuestion = subjectList.totalQuestions
  // let totalQuestionsCorrectAnswered = subjectList.totalQuestionsCorrect
  let data = [ 
    
     
    { name: 'totalQuestionsCorrect', value: subjectPerformance.performance ?? 0 , total: 0, fill: 'red' },
    { name: 'totalQuestionsCorrect', value: 100, total: 100, fill: 'red' },
];

  // totalQuestions: 0
  // totalQuestionsCorrect: 0

//   const calculatePercentage = (data, done) => {
//     let percentageCalculated = (done / data) * 100;
//     return percentageCalculated.toFixed(0).replace(".", ",").toString() + "%";
//   };

useEffect(() => {
  getSUbject(subjectPerformance)
  setSubject(subjectList)
}, [])

  console.log("subjectList from barchart", subject)

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
         {data.map((entry, index) => {
      if (index === 0) {
        return <Cell key={`cell-${index}`} fill="red"/>; // make sure to map the index to the colour you want
      }

        return <Cell key={`cell-${index}`} fill="grey" />;
      
    })}
     <Label
       value={`${data[0].value}%`}
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
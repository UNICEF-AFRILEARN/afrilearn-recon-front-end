import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Label, LabelList, Cell, ResponsiveContainer } from 'recharts';



const COLORS = ['#0088FE', '#00C49F'];

const Barchart = ({subjectPerformance, subjectList, outerIndex, perform}) => {
const [subject, setSubject] = useState([]);




//function to map through the subject and progress

// const getSUbject = (obj) => {
//   for(let i = 0; i < obj.length; i++){
//     // setSubject(obj[i].subject)
//     if(i === index){
//       console.log("here", obj[i])
//     }
//   }
//   return subject
// }
    // console.log("datadatadata ===>", data)
  // let totalQuestion = subjectList.totalQuestions
  // let totalQuestionsCorrectAnswered = subjectList.totalQuestionsCorrect
  let dataTwo = [
    {name: 'test', value: 100 ?? 0},
    {name: 'test', value: 10}
  ]

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
  // getSUbject(subjectPerformance)
  setSubject(subjectList)
}, [])

  console.log("perform subjectList from barchart", subjectPerformance)

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
      if (outerIndex === 0) {
        return <Cell key={`cell-${index}`} fill="red"/>; // make sure to map the index to the colour you want
      }
      if (outerIndex === 1) {
        return <Cell key={`cell-${index}`} fill="green"/>; // make sure to map the index to the colour you want
      }
      if (outerIndex === 2) {
        return <Cell key={`cell-${index}`} fill="blue"/>; // make sure to map the index to the colour you want
      }

        return <Cell key={`cell-${index}`} fill="grey" />;
      
    })}
       <Label
        value={`${subjectPerformance[outerIndex].totalTests}%`}
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
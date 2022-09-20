import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Label, LabelList, Cell, Tooltip, ResponsiveContainer } from 'recharts';



const COLORS = ['#0088FE', '#00C49F'];


const Becechart = (pastQuestionPerformance) => {
  const [activeIndex, seActiveIndex] = useState(null)

  //data from the API:
  // let data = pastQuestionPerformance 

  
  // useEffect(() => {
  //   setData(pastQuestionPerformance)
  // }, [pastQuestionPerformance])
  // let totalQuestion = subjectList.totalQuestions
  // let totalQuestionsCorrectAnswered = subjectList.totalQuestionsCorrect
  // const data = pastQuestionPerformance.pastQuestionPerformance
  let data = [ 
    
     
    { name: 'totalQuestionsCorrect', value: pastQuestionPerformance.pastQuestionPerformance ?? 0 , total: 0, fill: 'red' },
    { name: 'totalQuestionsCorrect', value: 100, total: 100, fill: 'red' },
];
  
  // console.log("pastQuestionPerformance", pastQuestionPerformance)
  // totalQuestions: 0
  // totalQuestionsCorrect: 0

  // const calculatePercentage = (data, done) => {
  //   let percentageCalculated = (done / data) * 100;
  //   return percentageCalculated.toFixed(0).replace(".", ",").toString() + "%";
  // };

  // const RADIAN = Math.PI / 180;
  // const renderCustomizedLabel = ({
  //   cx, cy, midAngle, innerRadius, outerRadius, percent, index,
  // }) => {
  //    const radius = innerRadius + (outerRadius - innerRadius);
  //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
  //   const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
  //   return (
  //     <text x={x} y={y} fill="red" textAnchor="middle" dominantBaseline="central">
  //       {`${(percent * 100).toFixed(0)}%`}
  //     </text>
  //   );
  // }

const onPieEnter = (e) => {
  // seActiveIndex()
  console.log("activeIndex", e.index)
 
};

  console.log("data from cece &&&&&&&&&", pastQuestionPerformance)

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
          fill="#8884d8"
          paddingAngle={1}
          dataKey="total"
          // onMouseEnter={onPieEnter}
        >
         {data.map((entry, index) => {
      if (index === 1 || index === 2 ) {
        return <Cell key={`cell-${index}`} fill="#f3f6f9" />; 
      }
      return <Cell key={`cell-${index}`} fill="red" />;
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

export default Becechart
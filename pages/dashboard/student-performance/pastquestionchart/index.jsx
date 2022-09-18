import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Label, LabelList, Cell, ResponsiveContainer } from 'recharts';



const COLORS = ['#0088FE', '#00C49F'];

const Pastquestionchart = ({pastQuestionPerformance}) => {
  // const [data, setData] = useState()

  //data from the API:
  // let data = pastQuestionPerformance 

  console.log("pastQuestionPerformance", pastQuestionPerformance)

  // useEffect(() => {
  //   setData(pastQuestionPerformance)
  // }, [pastQuestionPerformance])
  // let totalQuestion = subjectList.totalQuestions
  // let totalQuestionsCorrectAnswered = subjectList.totalQuestionsCorrect
  const data = [
    { name: `${pastQuestionPerformance.map((item) => item.name)}`,
    label: `${pastQuestionPerformance.map((item) => item.performance)}`,
      value: 20 },
    // { name: 'totalQuestionsCorrect', value: 20 },
  ];

  // totalQuestions: 0
  // totalQuestionsCorrect: 0

  // const calculatePercentage = (data, done) => {
  //   let percentageCalculated = (done / data) * 100;
  //   return percentageCalculated.toFixed(0).replace(".", ",").toString() + "%";
  // };


  console.log("data from barchart &&&&&&&&&", data)

    return (
      
      <PieChart width={200} height={162}>
        <Pie
          data={data}
          cx={85}
          cy={74}
          textAnchor={"middle"}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
           <Label 
        value={data.label} position="centerBottom"  className='label-top' fontSize='27px'
        />
        <Label 
        value="AVERAGE" position="centerTop" className='label'
        fontSize='15px'

        />
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    );
  }

export default Pastquestionchart
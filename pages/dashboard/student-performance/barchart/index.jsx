import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Label, LabelList, Cell, ResponsiveContainer } from 'recharts';



const COLORS = ['#0088FE', '#00C49F'];

const Barchart = ({subjectList}) => {

  // let totalQuestion = subjectList.totalQuestions
  // let totalQuestionsCorrectAnswered = subjectList.totalQuestionsCorrect
  const data = [
    { name: 'totalQuestions', value: 30 },
    { name: 'totalQuestionsCorrect', value: 20 },
  ];

  // totalQuestions: 0
  // totalQuestionsCorrect: 0

  const calculatePercentage = (data, done) => {
    let percentageCalculated = (done / data) * 100;
    return percentageCalculated.toFixed(0).replace(".", ",").toString() + "%";
  };


  console.log("subjectList from barchart", subjectList)

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
        value='70%' position="centerBottom"  className='label-top' fontSize='27px'
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

export default Barchart
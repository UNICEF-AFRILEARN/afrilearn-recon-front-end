import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Label, LabelList, Cell, ResponsiveContainer } from 'recharts';



const COLORS = ['#0088FE', '#00C49F'];

const Barchart = ({subjectList, outerIndex, subjectPerformance}) => {


  let dataTwo = [
    ...subjectPerformance,
    {name: 'test', totalTests: 100 ?? 0},
  ]
  // let totalQuestion = subjectList.totalQuestions
  // let totalQuestionsCorrectAnswered = subjectList.totalQuestionsCorrect
  let data = [ 
    { name: 'totalQuestionsCorrect', value: subjectPerformance[outerIndex].totalTests
    ?? 0 , total: 0, fill: 'green' },
    { name: 'totalQuestionsCorrect', value: 100, fill: 'blue' },
];

  // totalQuestions: 0
  // totalQuestionsCorrect: 0

  const calculatePercentage = (data, done) => {
    let percentageCalculated = (done / data) * 100;
    return percentageCalculated.toFixed(0).replace(".", ",").toString() + "%";
  };


  console.log("subjectList from barchart", outerIndex)

    return (
      
      <PieChart width={200} height={162}>
        <Pie
          data={data}
          cx={85}
          cy={74}
          textAnchor={"middle"}
          innerRadius={60}
          outerRadius={80}
          fill="fill"
          paddingAngle={5}
          dataKey="value"
        >
         <Label
        value={`${subjectPerformance[outerIndex].totalTests?? 0}%`}
       position="center"
       fill="grey"
       style={{
         fontSize: "30px",
         fontWeight: "bold",
         fontFamily: "Roboto"
       }}
     />
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
        </Pie>
      </PieChart>
    );
  }

export default Barchart
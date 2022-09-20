import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Label, LabelList, Cell, Tooltip, ResponsiveContainer } from 'recharts';



const COLORS = ['#0088FE', '#00C49F'];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#000">
        {payload.performance}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const Pastquestionchart = (pastQuestionPerformance) => {
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
    
    { name: 'totalQuestionsCorrect', value: pastQuestionPerformance.pastQuestionPerformance ?? 0, total: 38, fill: 'red' },
    { name: 'totalQuestionsCorrect', value: 100, total: 100, fill: 'red' },
];
  
  // console.log("pastQuestionPerformance", pastQuestionPerformance)
  // totalQuestions: 0
  // totalQuestionsCorrect: 0

  // const calculatePercentage = (data, done) => {
  //   let percentageCalculated = (done / data) * 100;
  //   return percentageCalculated.toFixed(0).replace(".", ",").toString() + "%";
  // };


  console.log("data from barchart &&&&&&&&&", pastQuestionPerformance)

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
          // label={renderCustomizedLabel}
          // onMouseEnter={onPieEnter}
      //     label={({ data }) => data.value}
      //     labelStyle={(index) => ({
      //       fill: dataMock[index].color,
      //       fontSize: '5px',
      //       fontFamily: 'sans-serif',
      // })}
      labelPosition={60}
        >
         {data.map((entry, index) => {
      if (index === 0) {
        return <Cell key={`cell-${index}`} fill="green"/>; // make sure to map the index to the colour you want
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

export default Pastquestionchart
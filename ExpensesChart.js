import React from 'react'
import Chart from '../Chart/Chart'

export default function ExpensesChart(props) {
    const chartDataPoints =[
        {lebal : 'Jan' , value : 0},
        {lebal : 'Feb' , value : 0},
        {lebal : 'March' , value : 0},
        {lebal : 'Apr' , value : 0},
        {lebal : 'May' , value : 0},
        {lebal : 'Jun' , value : 0},
        {lebal : 'July' , value : 0},
        {lebal : 'Aug' , value : 0},
        {lebal : 'Sep' , value : 0},
        {lebal : 'Oct' , value : 0},
        {lebal : 'Nov' , value : 0},
        {lebal : 'Dec' , value : 0},

    ];

   for(const expense of props.expenses){
    const expenseMonth=expense.date.getMonth();// startin to 0 and january is 0
    chartDataPoints[expenseMonth].value += expense.amount;
   }
  return (
    <div>
      <Chart  dataPoints={chartDataPoints}></Chart>
    </div>
  )
}

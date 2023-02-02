import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart(props) {
  const dataPointValues=props.dataPoints.map(datapoint=>datapoint.value);
  const totalMaximum =Math.max(...dataPointValues);
  return (
    <div className='chart'>
      {props.dataPoints.map(
         datapoint =>  <ChartBar
         key={datapoint.lebal}
          value={datapoint.value} 
       maxvalue={totalMaximum}
       lebal={datapoint.lebal} /> ) }
    </div>
  )
}

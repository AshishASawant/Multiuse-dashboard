import React from 'react'
import { LineSeries,ChartComponent,SeriesCollectionDirective, SeriesDirective,Inject,DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries,LinePrimaryXAxis,LinePrimaryYAxis } from '../../data/dummy'

const LineChart = () => {
  return (
    <ChartComponent
    id="line-chart"  
    background={"transparent"}
    legendSettings={{background:"white"}}
    height="420px"
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{border:{width:0}}}
    tooltip={{enable:true}}>
      <Inject services={[LineSeries,DateTime,Legend,Tooltip]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item,index)=>(
          <SeriesDirective key={index} {...item}/>
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
    )
}

export default LineChart
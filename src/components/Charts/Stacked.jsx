import React from 'react'
import { ChartComponent,SeriesDirective,Inject,Legend,Category, StackingColumnSeries,Tooltip, SeriesCollectionDirective } from '@syncfusion/ej2-react-charts/src'
import { stackedCustomSeries,stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../context/ContextProvider'

const Stacked = ({width,height}) => {

  const {currentMode}=useStateContext()
  return (
    <ChartComponent
    width={width}
    height={height}
    id='chart'
    primaryXAxis={stackedPrimaryXAxis}
    primaryYAxis={stackedPrimaryYAxis}
    chartArea={{border:{width:0}}}
    tooltip={{enable:true}}
    legendSettings={{background:'white'}}
    background="transparent"
    >
      <Inject services={[Legend,Category,StackingColumnSeries,Tooltip]}></Inject>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index)=><SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked
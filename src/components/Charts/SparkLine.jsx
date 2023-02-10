import React from 'react' 
import { SparklineComponent,Inject,SparklineTooltip } from '@syncfusion/ej2-react-charts'

const SparkLine = ({currentColor,type,id,height,width,data,color}) => {
  return (
    // <SparklineComponent 
    // id='chart'
    // height={height}
    // width={width}
    // lineWidth={1}
    // valueType="Numeric"
    // fill={color}
    // border={{color: currentColor, width:2}}
    // dataSource={data}
    // xName="xval"
    // yName="yval"
    // type={type}
    // tooltipSettings={
    //   {visible:true,
    //   format:'${xval}:data ${yval}',
    //   trackLineSettings:{
    //     visible:true
    //   }
    // }
    // }
    // >
      // <Inject services={[SparklineTooltip]} /> 
    // </SparklineComponent>
    <SparklineComponent id='sparkline' height={height} width={width} dataSource={data} xName='xval' yName='yval'>
</SparklineComponent>
  )
}

export default SparkLine
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

const RadialBarGraph = ({
  dataset, barKey, unit="",
  width="100%", height=300  
}) => {
 
  return <div style={{
    width: width,
    height: height,
    borderRadius: 10,
    marginTop: 20,
    display: 'flex',
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "center"
  }}> 

    <RadialBarChart 
      width={360} 
      height={height} 
      innerRadius={"20%"}
      outerRadius={"100%" }
      data={dataset} 
      startAngle={180} endAngle={-180}
      style={{paddingTop: 10, paddingRight: 70}}
    >
      <Legend verticalAlign="top" layout={"vertical"} width={100} align={"right"}/>
      
      <RadialBar label={{ fill: '#000000', position: 'insideStart' }}
       background 
       dataKey={barKey}
        />
      
      <Tooltip formatter={(value,name,props) => { return [`${props.payload.name} : ${value}${unit}`]}}/>
      </RadialBarChart>  
    </div>
}

export default RadialBarGraph
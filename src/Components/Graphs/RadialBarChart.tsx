import { ResponsiveContainer, RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

const RadialBarGraph = ({
  loading =true, error=false, 
  width="100%", height=350, color= "#8884d8", 
  dataset, xKey="", yKey="", lineKeys=[] 

}) => {
 
  return (<div style={{
    width: width,
    height: 300,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 28,
    display: 'flex',
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "center"
  }}> 


    <RadialBarChart 
      width={360} 
      height={300} 
      innerRadius="30%" 
      outerRadius="100%" 
      data={dataset} 
      startAngle={180} 
      endAngle={-180}
    >
       {/* <Legend iconSize={10}  layout='horizontal' verticalAlign='top'  align="center" /> */}
   
    <RadialBar label={{ fill: '#666', position: 'insideStart' }} background direction={'counterclockwise'}
    
    dataKey='shortwaveRad' />

    
    <Tooltip formatter={(value,name,props) => { return [`${props.payload.name} : ${value}MJ/m²`]} }  
    />
    </RadialBarChart>

  
  <style>{`
  .recharts-radial-bar-background-sector {
    padding-top: 30px !important;
  }
  `}</style>
  
  

  </div>)

}

export default RadialBarGraph
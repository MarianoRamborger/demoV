import { ResponsiveContainer ,AreaChart, CartesianGrid, XAxis, YAxis, Area, Tooltip } from 'recharts';

// const AreaGraph = ({context}) => {
const AreaGraph = ({
  loading= true, error=false, 
  width='100%', height=350, color= "#8884d8",
  dataset, xKey ="", yKey="", areaKey="" 

}) => {
  return (
    <div style={{
      width: width,
      height: height,
      borderRadius: 10,
      display: 'flex',
      flexFlow: "row wrap",
      alignItems: "center",
      justifyContent: "center"
    }}>
  
       <ResponsiveContainer  width="100%" height="85%"> 
          <AreaChart data={dataset}  >
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey={xKey} tick={{fill: 'red'}} tickLine={{stroke: 'yellow'}} axisLine={{stroke:"red"}} />
          <YAxis dataKey={yKey} fill={"red"}  />
          <Area dataKey={areaKey} stroke={"color"} fill={color} /> 
          <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
        
  
    </div>

  )
}

export default AreaGraph
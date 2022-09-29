import { 
  ResponsiveContainer, LineChart, Line, 
  CartesianGrid, XAxis, YAxis, Tooltip, Legend
  } from 'recharts';
import { legendFormatter } from '../../lib/utils';

const LineGraph = ({
  dataset, lineKeys=[] ,
  width="100%", height=265,  
  xKey="" 

}) => {
  return <div style={{
    width: width,
    height: height,
    borderRadius: 10,
    marginBottom: 0,
    display: 'flex',
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "center"
  }}> 

    <ResponsiveContainer width="100%" height="100%" >
      <LineChart data={dataset} >
        <CartesianGrid strokeDasharray="3 3"/>
        <Legend  
          height={30}  
          align={"right"}
          formatter={(value) => { return legendFormatter(value) }} 
          />
        <XAxis dataKey={xKey} />
        <YAxis tickFormatter={(value) => {return `${value}°C`}}/>
        {lineKeys.map((line,index) => {
          return <Line type="monotone" 
          dataKey={line.value} 
          key={index+Math.random()} 
          stroke={line.color}/>
        })}
        <Tooltip 
          formatter={(value, name) => {
          return [
              `${value}°C`, legendFormatter(name.toString())
          ]}}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
}

export default LineGraph
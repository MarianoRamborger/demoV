import { 
  ResponsiveContainer, AreaChart, CartesianGrid, 
  XAxis, YAxis, Area, Tooltip, Legend
} from 'recharts';
import { legendFormatter, valueFormatter } from '../../lib/utils';

const AreaGraph = ({
  dataset, areaKeys,
  width='100%', height=265,
  xKey="", yKey=""
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

      <ResponsiveContainer  width="100%" height="100%"> 
        <AreaChart data={dataset}  >
        <CartesianGrid strokeDasharray="3 3"/>
        <Legend  
          height={30}  
          align={"right"} 
          formatter={(value) => { return legendFormatter(value) }}
          />

        <XAxis dataKey={xKey}/>
        <YAxis dataKey={yKey} tickFormatter={(value) => {return `${value}°C`}}/>
          {areaKeys.map((area, index) => {
          return <Area 
            dataKey={area.value} 
            stroke={area.color} 
            fill={area.color} 
            key={index+Math.random()} 
            />
          })}   
        <Tooltip 
          formatter={(value, name) => {
            return [
              valueFormatter(value, "range"), legendFormatter(name.toString())
            ]}}
          />
        </AreaChart>
      </ResponsiveContainer>        
    </div>
  )
}

export default AreaGraph
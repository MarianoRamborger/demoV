import { ResponsiveContainer, Bar, CartesianGrid, Tooltip, BarChart, YAxis, XAxis } from 'recharts';

const BarGraph = ({
  error=false, 
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

   <ResponsiveContainer>    
    <BarChart data={dataset} layout="horizontal">
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey={"hours"}   />
    <Tooltip />
    <Bar dataKey="avgRad" fill="red"  />

    </BarChart>

    </ResponsiveContainer>

    
  
  <style>{`
  .recharts-radial-bar-background-sector {
    padding-top: 30px !important;
  }
  `}</style>
  
  

  </div>)

}

export default BarGraph
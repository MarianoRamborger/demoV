
const SectionHeader = ({color="#000000", fontSize=32, ...props}) => {
    return (
       <h1 style={{color,fontSize, fontFamily: "Arial"}} >
         {props.children} 
         </h1>
       )
    
}

export default SectionHeader
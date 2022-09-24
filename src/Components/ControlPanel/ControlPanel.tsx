import { Button, ButtonGroup } from '@mui/material';
import { SelectedData } from '../../lib/enums/selectedData';

const ControlPanel = ({dispatch,selectedData}) => {

  return <div className="control-panel-div">

      <ButtonGroup style={{marginTop: 15}}>

        <Button variant={selectedData === SelectedData.Daily ? "contained" : "outlined"} color={"success"} onClick={()=>dispatch({type:"setSelectedData", value:SelectedData.Daily})}> Daily </Button>
        <Button variant={selectedData === SelectedData.Weekly ? "contained" : "outlined"} color={"success"} onClick={()=>dispatch({type:"setSelectedData", value:SelectedData.Weekly})}> Weekly </Button>
      </ButtonGroup>

    
  <style> 
    {`
      .control-panel-div {
        width: 550px;
        height: 250px;
        display: flex;
        border-radius: 10px;
        flex-flow: column nowrap;
        align-items: center;
        border: 2px solid green;

      }
    `}
    </style>
  </div>
}

export default ControlPanel
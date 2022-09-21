import { CircularProgress } from '@mui/material';

const MainChart = ({context}) => {
  return (
    <div className="mainchart-div">

      {context.loadingData 
      ? <CircularProgress color='primary'/>
      : <div> ASDASDASD </div>} 

      <style> 
        {`

        .mainchart-div {
          width: 550px;
          height: 350px;
          border: 2px solid blue;
          border-radius: 10px;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: center;
        }

        `}
      </style>
    </div>

  )
}

export default MainChart
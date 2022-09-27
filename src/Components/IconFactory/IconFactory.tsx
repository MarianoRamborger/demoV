import { 
        BsFillCloudDrizzleFill, 
         BsFillCloudRainFill, BsFillCloudLightningRainFill,
         BsFillCloudSnowFill,
         BsFillSunFill,
         BsFillMoonFill,
         BsFillCloudyFill,
         BsWind
        } from 'react-icons/bs';

import {} from 'react-icons/bs';


const IconFactory = ({code = 0, size = 32,  hour = 0, color=""}) => {


  switch(code) {

    case 0:
      if ((hour > 5) && (hour < 19)) {
          return <BsFillSunFill size={32} fill={color || 'yellow'} />
      }  else return  <BsFillMoonFill size={32} fill={color || 'yellow'} />

    case 1: //Cloudy, increasingly
    case 2:
    case 3: return <BsFillCloudyFill size={32} fill={color || 'gray'} />

    
    case 51: //Drizzle, increasingly
    case 53:
    case 55: return <BsFillCloudDrizzleFill size={32} fill={color || '#AFC3CC'}  />

    case 61: // proper rain
    case 63: 
    case 65:
    case 66:
    case 67:  
    case 80:
    case 81:
    case 82: return <BsFillCloudRainFill size={32} fill={color || '#395877'}  />

    case 71: // snow
    case 73:
    case 75:
    case 77:
    case 85:
    case 87:  return <BsFillCloudSnowFill size={32} fill={color || '#fffafa'}  />

    case 95: //Thunder
    case 96: 
    case 99:  return <BsFillCloudLightningRainFill size={32} fill={color || '#686868'} />


    case 1000: return <BsWind size={32} fill={color || '#cabec0'} />

    default: return <BsFillCloudyFill size={32} fill={color || 'gray'}/>
  }

}


export default IconFactory
import { 
  BsFillCloudDrizzleFill, 
  BsFillCloudRainFill, BsFillCloudLightningRainFill,
  BsFillCloudSnowFill,
  BsFillSunFill,
  BsFillMoonFill,
  BsFillCloudyFill,
  BsWind,
  BsCalendar3,
  BsClockFill,
  BsThermometerHalf,
  BsSunriseFill,
  BsSunsetFill,
  } from 'react-icons/bs';

import {} from 'react-icons/bs';


const IconFactory = ({code = 0, size = 32,  hour = 0, color=""}) => {


  switch(code) {

    case 0:
      if ((hour > 5) && (hour < 19)) {
          return <BsFillSunFill size={size} fill={color || 'yellow'} />
      }  else return  <BsFillMoonFill size={size} fill={color || 'yellow'} />

    case 1: //Cloudy, increasingly
    case 2:
    case 3: return <BsFillCloudyFill size={size} fill={color || 'gray'} />

    case 51: //Drizzle, increasingly
    case 53:
    case 55: return <BsFillCloudDrizzleFill size={size} fill={color || '#AFC3CC'}  />

    case 61: // proper rain
    case 63: 
    case 65:
    case 66:
    case 67:  
    case 80:
    case 81:
    case 82: return <BsFillCloudRainFill size={size} fill={color || '#395877'}  />

    case 71: // snow
    case 73:
    case 75:
    case 77:
    case 85:
    case 87:  return <BsFillCloudSnowFill size={size} fill={color || '#fffafa'}  />

    case 95: //Thunder
    case 96: 
    case 99:  return <BsFillCloudLightningRainFill size={size} fill={color || '#686868'} />

    // Wind
    case 1000: return <BsWind size={size} fill={color || '#cabec0'} />

    // Calendar
    case 1001: return <BsCalendar3 size={size} fill={color || '#cabec0'} />

    // Clock
    case 1002: return <BsClockFill size={size} fill={color || '#cabec0'} />

    // Temperature
    case 1003: return <BsThermometerHalf size={size} fill={color || '#cabec0'} />

    // Sunrise
    case 1004: return <BsSunriseFill size={size} fill={color || '#cabec0'} />

    // Sunset
    case 1005: return <BsSunsetFill size={size} fill={color || '#cabec0'} />
    
    default: return <BsFillCloudyFill size={size} fill={color || 'gray'}/>
  }
}

export default IconFactory
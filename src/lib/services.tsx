import Axios from 'axios'
import mockWeather from '../lib/mocks/weatherData.json'

const checkMock = () => {
    return false
}

export const getData = async (lng:number,lat:number) => {
    if (checkMock()) {
      return mockWeather

    } else {

       try {
            const response = await Axios.get(`${process.env.REACT_APP_API_URI}/get-data`, {
              params: {
                lng: lng,
                lat: lat
              }
            })
            return response.data
            
        } catch(err) {
            console.log(err)
        }
    }
}



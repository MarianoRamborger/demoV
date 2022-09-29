import Axios from 'axios'
import { Res } from '../interfaces/response'
import mockWeather from '../lib/mocks/weatherData.json'

const checkMock = () => {
    return false
}

export const getData = async (lng:number,lat:number) => {
    if (checkMock()) {
      return mockWeather

    } else {
      let res : Res
      try {
            const {data}= await Axios.get(`${process.env.REACT_APP_API_URI}/get-data`, {
              params: {
                lng: lng,
                lat: lat
              }
            })

            return res = {
                data: data,
                errors: []
            }

            
            
        } catch(err) {
          console.log(err)

          return res = {
            data: [],
            errors: [{
              errorCode: err.response.status
            }]
          }
        
        }
    }
}



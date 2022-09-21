import Axios from 'axios'

const checkMock = () => {
    return false
}

export const getData = async (lng:number,lat:number) => {
    if (checkMock()) {

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



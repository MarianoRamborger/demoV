import Axios from 'axios'

const checkMock = () => {
    return false
}

export const getA = async () => {
    if (checkMock()) {

    } else {
       try {
            console.log("FSSD")
            const response = await Axios.get(`${process.env.REACT_APP_API_URI}/` )
            console.log(response)
        } catch(err) {
            console.log(err)
        }
    }
}


